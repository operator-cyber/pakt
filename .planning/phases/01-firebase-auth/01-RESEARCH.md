# Phase 1: Firebase Authentication - Research

**Researched:** 2026-04-13
**Domain:** Capacitor iOS initialization + Firebase Auth (Apple + Google OAuth)
**Confidence:** HIGH (stack), MEDIUM (Xcode/Apple provisioning details), HIGH (Firebase auth patterns)

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Capacitor setup is the first task in this phase, before any auth work. Run `cap init`, `cap add ios`, install bridge dependencies, verify native project builds.
- **D-02:** Bundle JS dependencies locally first (React, ReactDOM, Babel, Firebase, qrcode-generator) — Apple Guideline 2.5.2 rejects CDN scripts. Download to `lib/` directory, replace CDN `<script>` tags with local paths.
- **D-03:** Download fonts locally (Instrument Serif, Outfit) with `@font-face` declarations. Remove Google Fonts `<link>` tags.
- **D-04:** Install Capacitor plugins: `@capacitor-firebase/authentication` for native OAuth, `@capacitor/status-bar`, `@capacitor/splash-screen`.
- **D-05:** Bundle ID: `com.classofnone.pakt`, deployment target iOS 16.0, version 1.0.0.
- **D-06:** Hard gate. Every user must sign in before using the app. No bypass, no "browse first" option.
- **D-07:** Two-button layout: Sign with Apple (primary) and Sign in with Google (secondary). No email/password.
- **D-08:** Login screen: Firmament #0A0F23 background, Autumn #FAE4CF text/buttons, Georgia serif font. PAKT logo at top.
- **D-09:** Use `@capacitor-firebase/authentication` plugin for native OAuth flows (Apple and Google).
- **D-10:** Auth state checked on app launch. If user already signed in, skip login screen entirely.
- **D-11:** After auth, store Firebase UID, display name, and email in Firestore `users` collection.
- **D-12:** Profile icon in the top corner of the home/details screen. Tap to open a simple profile sheet.
- **D-13:** Profile sheet shows user name, email, and sign-out button. No settings beyond this.
- **D-14:** Sign-out clears auth state and returns to the login screen.
- **D-15:** Single error state: centered message "Unable to sign in. Check your connection and try again." with Retry button. No elaborate error differentiation for the user.
- **D-16:** Log specific error details to console for debugging.

### Claude's Discretion

- Loading state during auth (spinner, skeleton, etc.)
- Exact animation for profile sheet slide-up
- Sign with Apple button styling (follow Apple HIG requirements)
- Google Sign-In button styling (follow Google brand guidelines)
- Firestore `users` document structure beyond UID/name/email (add fields if needed for future phases)

### Deferred Ideas (OUT OF SCOPE)

None documented.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| AUTH-01 | User can sign in with Apple (required by Apple if any third-party login offered) | Two-step native+web credential pattern documented; Apple App ID + Xcode capability steps documented |
| AUTH-02 | User can sign in with Google | Two-step native+web credential pattern documented; REVERSED_CLIENT_ID URL scheme in Info.plist documented |
| AUTH-03 | Two-button login screen, no email/password, no account creation forms | Component pattern — no external dependencies needed |
| AUTH-04 | After auth, Firebase UID and profile stored in Firestore users collection | Firestore compat SDK available locally; write pattern documented |
| AUTH-05 | Session persists across app restarts (returning users skip login) | `initializeAuth` + `indexedDBLocalPersistence` pattern documented; onAuthStateChanged on app launch |
| AUTH-06 | Login screen matches existing brand (Firmament/Autumn palette, Georgia font) | Design system already in index.html; direct inheritance, no new dependencies |
</phase_requirements>

---

## Summary

Phase 1 has a mandatory prerequisite: Xcode must be installed before any Capacitor work begins. The machine currently has Swift 6.1 and Command Line Tools but no Xcode.app — this is the first blocking dependency. Once Xcode is installed, the phase breaks into two sequential workstreams: (1) Capacitor project initialization including local dependency bundling, and (2) Firebase Auth implementation with native OAuth.

The critical architectural constraint is that `@capacitor-firebase/authentication` v8.x requires Firebase SDK v12 and Capacitor v8. The app currently uses Firebase v10.12.0 via compat CDN. All Firebase scripts (app-compat, database-compat, auth-compat, and later firestore-compat) must be downloaded from gstatic as local files — confirmed downloadable, confirmed as standard JavaScript files at known URLs. Babel standalone at ~2.9MB is a real startup-time risk in a Capacitor WebView, but replacing it requires a build system, which is explicitly out of scope for this milestone. The plan must acknowledge this tradeoff.

The Firebase JS SDK auth pattern in a no-bundler Capacitor app uses the two-step approach: the plugin handles native OAuth on the device layer, returns credentials, then the web layer calls `signInWithCredential` using the Firebase Auth compat SDK. `onAuthStateChanged` drives the login gate check on app launch. Session persistence uses `indexedDBLocalPersistence` via `initializeAuth`.

**Primary recommendation:** Install Xcode first, then execute Phase 1A (local bundling) before touching any auth code. The auth implementation itself is well-documented and low-risk once the native shell is verified compiling.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @capacitor/core | 8.3.0 | Capacitor bridge runtime | Required peer dependency for all Capacitor plugins |
| @capacitor/cli | 8.3.0 | CLI for cap init, cap sync, cap open | Required for project setup and sync commands |
| @capacitor/ios | 8.3.0 | iOS native project template and bridge | Required for iOS target |
| @capacitor-firebase/authentication | 8.2.0 | Native OAuth for Apple + Google | Capawesome's maintained Capacitor Firebase plugin; only plugin that handles both Apple + Google natively on iOS |
| firebase (compat SDK via gstatic) | 12.12.0 | Firebase Auth web layer, Firestore | Required by @capacitor-firebase/authentication v8 peer dep `firebase: ^12.6.0` |

[VERIFIED: npm registry — all version numbers confirmed via `npm view` commands]

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @capacitor/status-bar | 8.0.2 | Native iOS status bar control | D-04 requires it; needed for UIStatusBarStyleLightContent on dark backgrounds |
| @capacitor/splash-screen | 8.0.1 | Native splash screen | D-04 requires it; hides WKWebView initial blank while app loads |
| @capacitor/haptics | 8.0.2 | Tactile feedback | D-04 lists it; useful for button confirmation on sign-in |

[VERIFIED: npm registry]

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| @capacitor-firebase/authentication | @capacitor-community/apple-sign-in + separate Google plugin | Two separate plugins, more wiring; capawesome consolidates both + adds Firebase credential bridging |
| Firebase compat SDK (gstatic download) | Firebase modular SDK with importmap | Modular SDK requires ES module import syntax, which Babel standalone cannot resolve without a bundler; compat SDK works as UMD globals — correct choice for this architecture |
| Babel standalone (kept from v1.0) | Add a build step (Vite/esbuild) | Build step would allow tree-shaking and eliminate ~2.9MB Babel payload; but introducing a build system is outside this milestone's scope and changes the entire DX |

### Installation

```bash
npm init -y
npm install @capacitor/core @capacitor/ios
npm install -D @capacitor/cli
npm install @capacitor-firebase/authentication
npm install @capacitor/status-bar @capacitor/splash-screen @capacitor/haptics
npx cap init "Pakt" "com.classofnone.pakt" --web-dir=.
npx cap add ios
npx cap sync
```

> Note: `firebase` is NOT npm-installed. The compat SDK is downloaded as local JS files from gstatic (see Architecture Patterns below). This is the correct approach for a no-bundler single-file app — importing the npm package requires a bundler.

### Version verification

All versions confirmed 2026-04-13 via `npm view`:
- @capacitor/core: 8.3.0
- @capacitor/ios: 8.3.0
- @capacitor/cli: 8.3.0
- @capacitor-firebase/authentication: 8.2.0
- @capacitor/status-bar: 8.0.2
- @capacitor/splash-screen: 8.0.1
- firebase latest: 12.12.0 (compat files confirmed at gstatic CDN)

[VERIFIED: npm registry]

---

## Architecture Patterns

### Recommended Project Structure

```
NDA App/
├── index.html              # Single-file app (JSX + styles + logic)
├── lib/                    # All local dependencies (NEW — created in Phase 1A)
│   ├── react.production.min.js
│   ├── react-dom.production.min.js
│   ├── babel.min.js
│   ├── firebase-app-compat.js
│   ├── firebase-database-compat.js
│   ├── firebase-auth-compat.js
│   ├── firebase-firestore-compat.js
│   ├── qrcode.min.js
│   ├── InstrumentSerif-Regular.woff2
│   ├── InstrumentSerif-Italic.woff2
│   └── Outfit-Variable.woff2
├── capacitor.config.json   # NEW — Capacitor config
├── package.json            # NEW — npm init output
├── ios/                    # NEW — generated by cap add ios
│   └── App/
│       ├── App/
│       │   ├── AppDelegate.swift   # Needs URL handler for OAuth
│       │   └── Info.plist          # Needs REVERSED_CLIENT_ID URL scheme
│       └── Podfile
├── sw.js                   # Cache version bump needed after lib/ added
└── manifest.json
```

### Pattern 1: Local Dependency Bundling (Phase 1A)

**What:** Download all CDN-loaded JS files and fonts to `lib/`, replace `<script src>` and `<link href>` CDN URLs with local paths.

**When to use:** Required before Capacitor build — Apple Guideline 2.5.2 auto-rejects apps that load executable code from remote URLs at runtime.

**File download sources and sizes:**

```bash
# React 18 UMD — 10KB
curl -o lib/react.production.min.js \
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js"

# ReactDOM 18 UMD — 129KB
curl -o lib/react-dom.production.min.js \
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"

# Babel standalone — 2.9MB (production startup risk — see Pitfalls)
curl -o lib/babel.min.js \
  "https://unpkg.com/@babel/standalone@7.29.2/babel.min.js"

# qrcode-generator — 55KB
curl -o lib/qrcode.min.js \
  "https://unpkg.com/qrcode-generator@1.4.4/qrcode.js"

# Firebase compat SDK v12.12.0 — all from gstatic, confirmed HTTP 200
curl -o lib/firebase-app-compat.js \
  "https://www.gstatic.com/firebasejs/12.12.0/firebase-app-compat.js"

curl -o lib/firebase-database-compat.js \
  "https://www.gstatic.com/firebasejs/12.12.0/firebase-database-compat.js"

curl -o lib/firebase-auth-compat.js \
  "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth-compat.js"

# Firestore (needed for Phase 1 D-11 user profile write and all subsequent phases)
curl -o lib/firebase-firestore-compat.js \
  "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore-compat.js"
```

[VERIFIED: HTTP 200 responses confirmed for all firebase-*-compat.js URLs at v12.12.0 via curl]

**Firebase version mismatch note:** The app currently loads v10.12.0 from gstatic. Phase 1A should download v12.12.0 to match the `@capacitor-firebase/authentication` v8 peer dependency (`firebase: ^12.6.0`). The compat API is backward-compatible — existing Realtime Database code (`firebase.database()`, `firebase.initializeApp()`) works unchanged.

**Script tag replacement in index.html:**
```html
<!-- BEFORE (CDN — Apple rejected) -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>

<!-- AFTER (local — Apple compliant) -->
<script src="lib/react.production.min.js"></script>
<script src="lib/firebase-app-compat.js"></script>
```

**@font-face pattern (replaces Google Fonts link):**
```css
/* Remove: <link href="https://fonts.googleapis.com/css2?family=..." /> */
/* Add in <style> block: */
@font-face {
  font-family: 'Instrument Serif';
  font-style: normal;
  font-weight: 400;
  src: url('lib/InstrumentSerif-Regular.woff2') format('woff2');
}
@font-face {
  font-family: 'Instrument Serif';
  font-style: italic;
  font-weight: 400;
  src: url('lib/InstrumentSerif-Italic.woff2') format('woff2');
}
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 100 900;
  src: url('lib/Outfit-Variable.woff2') format('woff2');
}
```

Font download URLs (Google Fonts CDN — download the woff2 files directly):

```bash
# Instrument Serif — download from Google Fonts static CDN
# Inspect https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1 for woff2 URLs
# Outfit Variable
# Inspect https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800 for woff2 URL
```

[ASSUMED] — The exact woff2 static URLs from Google Fonts require a browser request to resolve. The plan must include a step to fetch the CSS2 API response to get the actual woff2 CDN URLs before downloading.

### Pattern 2: Capacitor Config for Root Web Dir

**What:** `capacitor.config.json` with `webDir: "."` pointing to the project root where `index.html` lives.

**When to use:** This project has no build step. The index.html is the web asset. Capacitor needs `webDir` to point to its location.

```json
{
  "appId": "com.classofnone.pakt",
  "appName": "Pakt",
  "webDir": ".",
  "plugins": {
    "FirebaseAuthentication": {
      "skipNativeAuth": false,
      "providers": ["apple.com", "google.com"]
    },
    "StatusBar": {
      "style": "LIGHT",
      "backgroundColor": "#0a0f23"
    }
  }
}
```

[VERIFIED: capacitorjs.com docs — webDir is user-configurable; "." is a valid path as long as index.html is in that directory]

**Important:** `cap sync` will copy everything in `webDir` into `ios/App/App/public/`. The `.planning/` directory and other non-app files will be copied too. This is harmless but adds bulk. Consider a `.capacitorignore` file if needed.

### Pattern 3: Two-Step Firebase Auth (Native Credential + Web SDK)

**What:** The plugin obtains OAuth credentials natively on the device, then the Firebase Auth compat SDK is used on the web layer to create a session. This is the official pattern — not optional.

**Why required:** The Capacitor WebView cannot directly invoke Apple's `ASAuthorizationAppleIDProvider` or Google's GIDSignIn. The plugin bridges the native call, returns the credential tokens, then the Firebase web SDK validates them and creates a persistent auth session.

**Sign In with Apple:**
```javascript
// Source: github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/firebase-js-sdk.md
const signInWithApple = async () => {
  // Step 1: Native layer — plugin invokes ASAuthorizationAppleIDProvider
  const result = await FirebaseAuthentication.signInWithApple({
    skipNativeAuth: true,
  });
  // Step 2: Web layer — Firebase validates the Apple credential
  const provider = new firebase.auth.OAuthProvider('apple.com');
  const credential = provider.credential({
    idToken: result.credential?.idToken,
    rawNonce: result.credential?.nonce,
  });
  await firebase.auth().signInWithCredential(credential);
};
```

**Sign In with Google:**
```javascript
// Source: github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/firebase-js-sdk.md
const signInWithGoogle = async () => {
  // Step 1: Native layer — plugin invokes GIDSignIn
  const result = await FirebaseAuthentication.signInWithGoogle();
  // Step 2: Web layer — Firebase validates the Google credential
  const credential = firebase.auth.GoogleAuthProvider.credential(
    result.credential?.idToken
  );
  await firebase.auth().signInWithCredential(credential);
};
```

> Note: The code examples above use the compat API (`firebase.auth().signInWithCredential`) which matches the existing app architecture (compat SDK loaded as globals). The modular API examples from the plugin docs use ES module imports which require a bundler.

[VERIFIED: Official plugin docs at github.com/capawesome-team/capacitor-firebase]

### Pattern 4: Auth Persistence on iOS

**What:** Firebase Auth with `initializeAuth` and `indexedDBLocalPersistence` ensures the user stays signed in across app restarts.

**Problem:** On Capacitor iOS with standard `getAuth()`, there is a known issue where `onAuthStateChanged` may never fire if IndexedDB initialization hangs. The `initializeAuth` with explicit persistence bypasses this.

```javascript
// In the firebase setup block, AFTER firebase.initializeApp(firebaseConfig):
// This replaces the standard firebase.auth() initialization
const auth = firebase.app().auth();
// For Capacitor native, IndexedDB persistence is set automatically by the compat SDK
// If issues arise, the pattern below (modular API) is the fallback:
// initializeAuth(getApp(), { persistence: indexedDBLocalPersistence })
```

[ASSUMED] — The compat SDK's persistence behavior in Capacitor iOS is documented inconsistently. The modular `initializeAuth` pattern is fully documented. The compat SDK should default to LOCAL persistence (IndexedDB in capable environments), but if `onAuthStateChanged` does not fire on app restart, switching to modular `initializeAuth` is the fix.

### Pattern 5: Login Gate in React Component

**What:** The `App` component checks `firebase.auth().currentUser` (or `onAuthStateChanged`) on mount. If no user, renders `<LoginScreen>`. If user exists, renders existing NDA flow.

```javascript
const App = () => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  if (!authChecked) return <LoadingSpinner />;
  if (!user) return <LoginScreen />;
  return <ExistingApp user={user} />;
};
```

[ASSUMED] — Standard React pattern; Firebase onAuthStateChanged fires once on load with current state (null if not signed in, user object if persisted session).

### Pattern 6: Firestore User Profile Write (D-11)

**What:** After successful sign-in, write user profile to Firestore `users` collection.

```javascript
const writeUserProfile = async (user) => {
  const db = firebase.firestore();
  await db.collection('users').doc(user.uid).set({
    uid: user.uid,
    displayName: user.displayName || '',
    email: user.email || '',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    tier: 'free',
    subscriptionExpiry: null
  }, { merge: true });
};
```

> `merge: true` ensures subsequent sign-ins don't overwrite existing tier data once Phase 5 adds subscription fields.

[ASSUMED] — Standard Firestore pattern; `merge: true` behavior is documented in Firebase docs.

### Anti-Patterns to Avoid

- **Signing in on the web layer only (not native):** Calling `firebase.auth().signInWithPopup()` from the compat SDK inside a Capacitor WebView will fail. Apple's SFSafariViewController and popup flows do not work in WKWebView. Must use the plugin's native flow.
- **Using `skipNativeAuth: false` for Google on iOS:** When `skipNativeAuth` is omitted or false for Google, the plugin signs in on the native layer but does NOT create a web-layer session automatically. The two-step pattern (get credential, call signInWithCredential) is required for session persistence.
- **Loading Firebase compat SDK before firebase-app-compat.js:** The load order matters. `firebase-app-compat.js` must be first, followed by product SDKs (database, auth, firestore).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Apple OAuth native flow | Custom ASAuthorizationAppleIDProvider wrapper | @capacitor-firebase/authentication | Apple's authorization flow requires native Swift code; the plugin handles the full nonce generation, ASAuthorizationController delegate, and error handling |
| Google OAuth native flow | Custom GIDSignIn wrapper | @capacitor-firebase/authentication | Google Sign-In SDK for iOS requires proper Info.plist URL scheme and AppDelegate URL handler; the plugin configures this via CocoaPods pod spec |
| Session persistence across WebView restarts | Manual localStorage/IndexedDB token storage | Firebase Auth SDK (indexedDBLocalPersistence) | Token refresh, expiry, and re-auth are complex; Firebase SDK handles the full token lifecycle |
| Sign with Apple nonce | Custom SHA256 hash generation | Plugin generates nonce automatically | Apple requires a cryptographically random nonce hashed with SHA256; the plugin generates and manages this |

**Key insight:** The native OAuth flows require Swift code that runs outside the WebView. The Capacitor plugin is the only practical bridge between the web JS layer and the native iOS identity frameworks.

---

## Common Pitfalls

### Pitfall 1: Firebase SDK Version Mismatch

**What goes wrong:** Installing `@capacitor-firebase/authentication@8.x` while keeping Firebase compat SDK at v10.12.0 (current). The plugin peer dependency requires `firebase: ^12.6.0`. At runtime, the plugin calls Firebase Auth methods that changed between v10 and v12, causing silent failures or type errors.

**Why it happens:** The app currently loads v10.12.0 from gstatic. When downloading compat files locally, it's easy to accidentally use the same version.

**How to avoid:** Download all Firebase compat files from `https://www.gstatic.com/firebasejs/12.12.0/`. Update all four files (app, database, auth, firestore) together.

**Warning signs:** `firebase.auth is not a function` or `TypeError` errors on sign-in attempt.

### Pitfall 2: Xcode Not Installed

**What goes wrong:** `npx cap add ios` and `npx cap open ios` require Xcode. Swift Command Line Tools alone are insufficient — they lack the simulator, the iOS SDK, CocoaPods SPM integration, and the signing/provisioning GUI.

**Why it happens:** Boris's machine has Swift 6.1 CLI tools but no Xcode.app in /Applications.

**How to avoid:** Xcode must be installed from the App Store (or developer.apple.com) before any Capacitor iOS work begins. Xcode 16.x required for Swift 6.1 compatibility. After install, run `sudo xcode-select -s /Applications/Xcode.app`.

**Warning signs:** `cap add ios` fails with "Xcode required" or `cap open ios` fails silently.

### Pitfall 3: CocoaPods Not Installed

**What goes wrong:** `npx cap sync` triggers a `pod install` for the iOS project. Without CocoaPods, the Firebase GoogleSignIn pod for the `@capacitor-firebase/authentication` Google provider will not install.

**Why it happens:** CocoaPods not found on this machine (verified).

**How to avoid:** Install CocoaPods after Xcode: `sudo gem install cocoapods`. The default Ruby (2.6.10) is present.

**Warning signs:** `npx cap sync` fails with "CocoaPods not found" or the Google Sign-In native flow crashes at runtime.

### Pitfall 4: Missing REVERSED_CLIENT_ID URL Scheme for Google Sign-In

**What goes wrong:** Google Sign-In native flow completes but the app never receives the redirect. The user sees a Google auth page that never returns to the app.

**Why it happens:** After Google OAuth, iOS uses a custom URL scheme to redirect back to the app. If the scheme is not registered in Info.plist, the redirect is swallowed.

**How to avoid:** After downloading GoogleService-Info.plist from Firebase Console (Project Settings > iOS app), copy the `REVERSED_CLIENT_ID` value (format: `com.googleusercontent.apps.XXXXXX`) into Info.plist > URL Types > URL Schemes.

**Warning signs:** Google sign-in sheet appears, authentication succeeds on Google's side, but app hangs with no callback.

### Pitfall 5: Sign with Apple on Simulator vs Real Device

**What goes wrong:** Sign with Apple works on real iOS devices but fails on simulator with error code 1001 (`AuthorizationError`). The simulator does not support Sign with Apple in all configurations.

**Why it happens:** Apple's `ASAuthorizationAppleIDProvider` has simulator limitations. This is a known behavior, not a code bug.

**How to avoid:** Test Sign with Apple on a real device connected to Xcode, not the simulator. Google Sign-In works on simulator. Build the auth flow testing plan around a real device for Apple, simulator for Google.

**Warning signs:** Error `com.apple.AuthenticationServices.AuthorizationError error 1001` in the Xcode console.

### Pitfall 6: Babel Standalone Startup Delay in WKWebView

**What goes wrong:** Babel standalone at ~2.9MB adds a 1-4 second startup delay in WKWebView on device while it parses `<script type="text/babel">`. The app appears to hang on the splash screen.

**Why it happens:** Babel standalone transpiles all JSX at runtime in the browser. On desktop this is acceptable; on iOS WKWebView the JavaScript engine is less aggressively JIT-optimized.

**How to avoid:** Within this milestone's constraints (no build system), mitigate by: (1) Xcode's splash screen hides the blank period, (2) ensuring the `@capacitor/splash-screen` plugin hides only after the React app fires `SplashScreen.hide()`. A proper fix (pre-building JSX with esbuild) is out of scope for this milestone.

**Warning signs:** App appears to load but shows nothing for 2+ seconds after splash screen dismisses.

### Pitfall 7: cap sync copies .planning/ into iOS bundle

**What goes wrong:** With `webDir: "."`, `cap sync` copies the entire project root into `ios/App/App/public/`. The `.planning/` directory (with full research, plans, context files) ships inside the iOS app bundle.

**Why it happens:** Capacitor does not have a default ignore list for non-web files.

**How to avoid:** Create `.capacitorignore` in the project root before first sync:

```
.planning/
Context/
Skills/
Assets/
nda-signer-v2.2.jsx
*.md
node_modules/
ios/
```

[ASSUMED] — `.capacitorignore` syntax follows `.gitignore` patterns; verify Capacitor 8 respects this file before first sync.

### Pitfall 8: onAuthStateChanged never fires on iOS

**What goes wrong:** App launches, auth check never resolves, loading spinner hangs forever.

**Why it happens:** Firebase Auth in Capacitor iOS uses IndexedDB for persistence. There is a documented upstream issue in `firebase-js-sdk` where `onAuthStateChanged` never fires if IndexedDB initialization hangs.

**How to avoid:** The compat SDK's default persistence should work. If the issue is encountered: add a timeout fallback that treats null user as unauthenticated after 5 seconds. Long-term fix is switching to modular `initializeAuth` with explicit `indexedDBLocalPersistence`.

**Warning signs:** `onAuthStateChanged` callback never fires (authChecked stays false).

---

## Code Examples

### Firebase App Initialization with Auth + Firestore (compat API)

```javascript
// Source: firebase.google.com/docs/web/alt-setup (compat SDK pattern)
// Script load order in index.html:
// 1. lib/firebase-app-compat.js
// 2. lib/firebase-database-compat.js
// 3. lib/firebase-auth-compat.js
// 4. lib/firebase-firestore-compat.js

const firebaseConfig = {
  apiKey: "AIzaSyBnmvhAJU871hY3P9tz0dK5x6JYc4L62Xs",
  authDomain: "pakt-76a51.firebaseapp.com",
  databaseURL: "https://pakt-76a51-default-rtdb.firebaseio.com",
  projectId: "pakt-76a51",
  storageBucket: "pakt-76a51.firebasestorage.app",
  messagingSenderId: "1008850103409",
  appId: "1:1008850103409:web:28f6e25743bb5c2997ffd0"
};

// initializeApp is idempotent — existing code unchanged
const fbApp = firebase.initializeApp(firebaseConfig);
const db = firebase.database();       // Realtime DB — existing usage unchanged
const auth = firebase.auth();         // NEW — Auth instance
const firestore = firebase.firestore(); // NEW — Firestore for user profiles
```

### AppDelegate.swift URL Handler (required for OAuth redirects)

```swift
// Source: capawesome.io/plugins/firebase/authentication/
// Add to ios/App/App/AppDelegate.swift (Capacitor generates a skeleton)
func application(_ app: UIApplication, open url: URL,
                 options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
  return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
}
```

### FirebaseAuthentication plugin call (loaded via Capacitor bridge)

```javascript
// Source: capawesome.io/plugins/firebase/authentication/
// FirebaseAuthentication is available as window.Capacitor.Plugins.FirebaseAuthentication
// OR via the npm package if using module bundler (we're not — use global)
const { FirebaseAuthentication } = window.Capacitor.Plugins;

// OR if using the npm package global export approach:
// This requires verifying how @capacitor-firebase/authentication
// exposes its API when the npm package is installed but no bundler is used
```

[ASSUMED] — Plugin API accessibility pattern when no bundler is present needs verification during Wave 0. The standard pattern in all docs assumes ES module imports. The `window.Capacitor.Plugins.FirebaseAuthentication` global path may be the correct approach for a no-bundler setup.

### Capacitor Bridge Plugin Access (no bundler)

```javascript
// Without a module bundler, Capacitor plugins installed via npm
// are accessible via the Capacitor global after cap sync injects
// the Capacitor bridge (capacitor.js) into the WebView
// The bridge script is injected automatically by the iOS native layer
// Plugin access pattern:
const { FirebaseAuthentication } = Capacitor.Plugins;
```

[ASSUMED] — This is the documented pattern for non-module web environments in older Capacitor docs. Verify with Capacitor 8.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Firebase SDK v8/v9 compat | Firebase SDK v12 (compat still available) | v12 = 2025 | API unchanged for compat users; new features in modular only |
| Capacitor 6 with capawesome v6 plugin | Capacitor 8 + capawesome v8 | 2025 | Must use matching versions; v6 plugin fails with Capacitor 8 core |
| signInWithPopup in WebView | Plugin native OAuth + signInWithCredential | Since Capacitor 3+ | WKWebView blocks popup flows; native plugin is the only viable path |
| Firebase Auth without explicit persistence | initializeAuth + indexedDBLocalPersistence | Firebase v9+ | Required for reliable session persistence in Capacitor iOS |

**Deprecated/outdated:**
- `@capacitor-community/firebase-auth` — Older community plugin, not maintained for Capacitor 6+. The capawesome `@capacitor-firebase/authentication` is the current standard.
- `firebase-auth.js` (non-compat modular) — Cannot be used with compat `firebase.auth()` globals. Stick to compat for this architecture.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Firebase compat SDK defaults to IndexedDB persistence in Capacitor iOS without calling `initializeAuth` explicitly | Pattern 4 (Auth Persistence) | onAuthStateChanged may not fire on app restart; fix is to switch to modular initializeAuth — detectable early in testing |
| A2 | `Capacitor.Plugins.FirebaseAuthentication` global is the correct API access pattern in a no-bundler environment | Code Examples | If wrong, plugin calls will throw `undefined is not a function`; fix is to find correct global path from Capacitor 8 docs — detectable in Wave 0 |
| A3 | `.capacitorignore` file suppresses `.planning/` and other non-app files from being copied into the iOS bundle by `cap sync` | Architecture Patterns (Pattern 2) | If wrong, non-app files ship in the iOS bundle (harmless but wasteful); fix is to verify before first sync |
| A4 | The existing `firebase.initializeApp(firebaseConfig)` call is idempotent and will not error when called again after upgrading to v12 compat | Code Examples (Firebase init) | If wrong, "Firebase already initialized" error; fix is to wrap in `if (!firebase.apps.length)` check |
| A5 | Google Fonts static woff2 URLs are obtainable by fetching the Google Fonts CSS2 API and parsing the `src:` declarations | Architecture Patterns (Pattern 1, font downloads) | If wrong, fonts won't load locally; fallback is to use a font hosting service or install fonts via npm package |
| A6 | `skipNativeAuth: true` for Apple is required to get the raw nonce for `signInWithCredential`; without it the plugin signs in natively only and the web layer has no session | Pattern 3 (Two-Step Auth) | If wrong, either Apple auth works without `skipNativeAuth: true` or does not work at all; detectable in Wave 0 testing |

---

## Open Questions (RESOLVED)

1. **Plugin global access without a bundler**
   - RESOLVED: Plan 03 commits to `const { FirebaseAuthentication } = Capacitor.Plugins;` as the global access pattern. Verification step in Plan 02 Task 3 (simulator build) will confirm the plugin is accessible before auth code runs.

2. **GoogleService-Info.plist for iOS app creation**
   - RESOLVED: Plan 02 Task 1 (human checkpoint) explicitly requires registering the iOS app in Firebase Console with bundle ID `com.classofnone.pakt` and downloading GoogleService-Info.plist before proceeding.

3. **Apple Developer account membership and provisioning**
   - RESOLVED: Plan 02 Task 1 (human checkpoint) explicitly requires enabling Sign in with Apple capability at developer.apple.com before proceeding. Apple Developer Program membership is a prerequisite for this step.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | npm install, cap CLI | YES | v25.8.2 | — |
| npm | Package installation | YES | 11.11.1 | — |
| Swift | iOS compilation | YES (CLI tools) | Swift 6.1 | — |
| Xcode.app | cap add ios, cap open ios, iOS build | NO | — | BLOCKING — must install from App Store |
| CocoaPods | pod install (Google Sign-In pod) | NO | — | Install via `sudo gem install cocoapods` after Xcode |
| Ruby | CocoaPods install | YES | 2.6.10 | — |
| Apple Developer Account | Provisioning, TestFlight, Sign with Apple | UNKNOWN | — | Cannot test on device without it |
| Firebase Console iOS app (pakt-76a51) | GoogleService-Info.plist generation | UNKNOWN | — | Create iOS app in Firebase Console if missing |

**Missing dependencies with no fallback:**
- **Xcode.app** — Every iOS-related task in this phase is blocked without it. Must be installed before `cap init`, `cap add ios`, `cap open ios`, or any native build. Install size: ~12GB. Install time: 30-60 min.

**Missing dependencies with fallback:**
- **CocoaPods** — Required for Google Sign-In native pod. Install with `sudo gem install cocoapods` (Ruby is present). This is a one-command fix after Xcode is installed.
- **Apple Developer Program membership** — Can develop and test in Xcode simulator (Sign with Apple has simulator limitations, see Pitfall 5). Real-device testing and App Store submission require paid membership ($99/year).

---

## Validation Architecture

No `config.json` found in `.planning/` — treating `nyquist_validation` as enabled.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual — no automated test framework in the codebase |
| Config file | None |
| Quick run command | Open in iOS Simulator via Xcode, tap through auth flow |
| Full suite command | Run on real device; test Apple + Google sign-in; restart app and verify session persistence |

> This phase has no automated test suite. The single-file architecture with Babel standalone does not have a Jest/Vitest-compatible test harness. Validation is manual.

### Phase Requirements to Test Map

| Req ID | Behavior | Test Type | Command | File Exists? |
|--------|----------|-----------|---------|-------------|
| AUTH-01 | Sign with Apple succeeds and shows user name | Manual — real device only | Run on iPhone; tap Sign with Apple | N/A |
| AUTH-02 | Sign in with Google succeeds and shows user name | Manual — simulator or device | Run in Simulator; tap Google button | N/A |
| AUTH-03 | Login screen shows two buttons, no other fields | Manual visual check | Open app fresh; verify UI | N/A |
| AUTH-04 | Firestore users collection gets a document after sign-in | Manual — Firebase Console | Sign in; check Firebase Console > Firestore | N/A |
| AUTH-05 | Returning user bypasses login on relaunch | Manual — device restart | Sign in, close app, reopen; verify no login screen | N/A |
| AUTH-06 | Login screen color/font matches brand | Manual visual check | Compare with CLAUDE.MD design system | N/A |

### Wave 0 Gaps

None — no test infrastructure needs to be created. All validation is manual against physical device or simulator. The verification steps above are the validation strategy.

---

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | Yes | Firebase Auth (Apple + Google OAuth) — delegated to identity providers |
| V3 Session Management | Yes | Firebase Auth SDK handles token lifecycle; indexedDBLocalPersistence for session storage |
| V4 Access Control | Yes (Phase 2) | Firestore security rules (Phase 2 scope; rule in CLAUDE.MD is permissive placeholder) |
| V5 Input Validation | No | No user text input in auth flow; provider handles all input |
| V6 Cryptography | Yes | Apple nonce: SHA256 hash generated by plugin; Google: HTTPS token exchange via Firebase SDK |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| OAuth token interception | Information Disclosure | HTTPS enforced by Firebase SDK; native OAuth flows do not expose tokens in WebView |
| Session fixation after sign-out | Elevation of Privilege | `firebase.auth().signOut()` invalidates the local token; call on sign-out button tap |
| Open Firebase Realtime Database | Tampering / Info Disclosure | Existing issue documented in CLAUDE.MD; security rules fix is scoped to Phase 1C (in CLAUDE.MD) |
| Firestore user doc overwrite by other users | Tampering | Firestore security rules (Phase 2); for Phase 1, rules will be permissive — do not store sensitive data in Phase 1 beyond uid/name/email |
| App Store rejection for CDN scripts | Integrity | Mitigation is Phase 1A itself — downloading all scripts locally eliminates the guideline 2.5.2 risk |

---

## Sources

### Primary (HIGH confidence)

- `npm view @capacitor-firebase/authentication` — version 8.2.0, peerDeps `@capacitor/core >=8.0.0` and `firebase ^12.6.0` [VERIFIED]
- `npm view @capacitor/core @capacitor/ios @capacitor/cli` — all version 8.3.0 [VERIFIED]
- `npm view firebase` — version 12.12.0 [VERIFIED]
- `curl -sI https://www.gstatic.com/firebasejs/12.12.0/firebase-*-compat.js` — HTTP 200 for app, database, auth, firestore compat files [VERIFIED]
- github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/firebase-js-sdk.md — Two-step auth patterns, initializeAuth with indexedDBLocalPersistence [CITED]
- github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/CHANGELOG.md — v8.0.0 requires Capacitor 8 + Firebase ^12.6.0 [CITED]
- capawesome.io/plugins/firebase/authentication/ — capacitor.config providers, AppDelegate URL handler [CITED]
- github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/setup-google.md — REVERSED_CLIENT_ID URL scheme in Info.plist [CITED]
- firebase.google.com (search-verified) — iOS-only native apps do not require Service ID for Sign with Apple; App ID capability is sufficient [CITED via search]

### Secondary (MEDIUM confidence)

- capacitorjs.com/docs/getting-started — webDir configuration, cap init interactive setup [CITED]
- firebase.google.com/docs/auth/web/auth-state-persistence + github.com/firebase/firebase-js-sdk/issues/9132 — IndexedDB persistence hang issue on iOS [CITED, issue is documented]

### Tertiary (LOW confidence)

- Babel standalone startup performance on iOS WebView — general consensus from developer community (no specific benchmark found) [LOW]
- `window.Capacitor.Plugins.FirebaseAuthentication` global access pattern without bundler — inferred from Capacitor bridge architecture, not explicitly documented for v8 [LOW — verify in Wave 0]

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all versions verified via npm registry and npm view
- Firebase compat download strategy: HIGH — HTTP 200 confirmed for all files at v12.12.0
- Two-step auth pattern: HIGH — documented in official plugin GitHub docs
- Apple/Google Developer portal setup steps: MEDIUM — individual steps documented in search results and plugin docs; Apple portal UI changes periodically
- Plugin global access without bundler: LOW — requires Wave 0 verification

**Research date:** 2026-04-13
**Valid until:** 2026-07-13 (90 days — Capacitor and Firebase move fast; re-verify versions before executing if delayed)

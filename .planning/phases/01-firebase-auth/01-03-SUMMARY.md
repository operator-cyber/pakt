---
phase: 01-firebase-auth
plan: "03"
subsystem: auth-ui
tags: [login-screen, auth-gate, profile-sheet, firebase-auth, oauth, tab-bar]
dependency_graph:
  requires: ["01-02"]
  provides: [login-screen, auth-gate, session-persistence, profile-sheet, account-tab]
  affects: [index.html]
tech_stack:
  added:
    - "Capacitor FirebaseAuthentication plugin (signInWithApple, signInWithGoogle)"
    - "firebase.auth().onAuthStateChanged for session persistence"
    - "firebase.auth().signInWithCredential for two-step OAuth"
  patterns:
    - "Auth gate in App component: !authChecked returns null, !user renders LoginScreen"
    - "Two-step native OAuth: Capacitor plugin gets native cred, web SDK creates session"
    - "Capacitor plugin access guarded with typeof Capacitor check for browser dev"
    - "SplashScreen auto-hide after 2 seconds (launchAutoHide: true)"
key_files:
  modified:
    - index.html (LoginScreen, ProfileSheet, auth gate, auth functions, 3-tab bar)
    - sw.js (cache bumped to pakt-v17)
    - capacitor.config.json (SplashScreen launchAutoHide: true)
    - ios/App/App/AppDelegate.swift (import FirebaseCore, FirebaseApp.configure())
    - ios/App/App/Info.plist (CFBundleURLSchemes with REVERSED_CLIENT_ID)
    - ios/App/App/App.entitlements (Sign in with Apple capability)
    - ios/App/App.xcodeproj/project.pbxproj (GoogleService-Info.plist + App.entitlements added via xcodeproj gem)
decisions:
  - "Profile icon moved to tab bar as ACCOUNT tab (third tab alongside HOME and VAULT) after iterating on fixed/absolute positioning which overlapped content"
  - "SplashScreen changed from launchAutoHide:false to launchAutoHide:true with 2s duration — false caused stuck splash on relaunch due to service worker caching stale content"
  - "Service worker cache bumped from pakt-v16 to pakt-v17 to bust stale cache after auth code added"
  - "FirebaseApp.configure() added to AppDelegate.swift — required by @capacitor-firebase/authentication plugin, was missing and caused black screen on launch"
  - "GoogleService-Info.plist added to Xcode project via xcodeproj gem — file on disk but not in build phases caused Firebase init crash"
  - "Login button whites changed from #fff to #f7f6f3 to match PAKT logo white"
  - "writeUserProfile calls firestore.collection('users') but Firestore not yet created in Firebase Console — will activate in Phase 2"
  - "webDir 'www' build pattern: npm run build:web copies assets, npm run cap:sync chains build+sync"
metrics:
  completed_date: "2026-04-13"
  tasks_completed: 2
  tasks_total: 2
  files_modified: 7
---

# Phase 01 Plan 03: Login Screen, Auth Gate, Session Persistence Summary

Complete Firebase Authentication flow implemented: LoginScreen with Apple + Google buttons, auth gate wrapping entire app, session persistence via onAuthStateChanged, ProfileSheet with sign-out accessible via ACCOUNT tab in bottom navigation.

## Tasks Completed

| Task | Name | Key Changes |
|------|------|-------------|
| 1 | Add LoginScreen, auth gate, ProfileSheet to index.html | 4 auth functions, 2 new components, App auth gate, 3-tab bar |
| 2 | Verify auth flow on iOS simulator | Google Sign-In verified, session persistence confirmed, sign-out works |

## What Was Built

**Auth functions (index.html):**
- signInWithApple: two-step native OAuth (Capacitor plugin + web SDK signInWithCredential)
- signInWithGoogle: two-step native OAuth (Capacitor plugin + web SDK signInWithCredential)
- writeUserProfile: Firestore users/{uid} set with merge (uid, displayName, email, tier:'free', createdAt)
- signOutUser: Capacitor plugin signOut + web SDK signOut

**LoginScreen component:**
- Firmament #0a0f23 background, PAKT logo (217px) centered above buttons
- Sign in with Apple button (black bg, #f7f6f3 text, Apple logo SVG)
- Sign in with Google button (#f7f6f3 bg, Google G logo SVG)
- Loading state ("Signing in..."), error state with retry
- Buttons pinned to bottom with safe area padding

**App auth gate:**
- useState: user (null), authChecked (false), showProfile (false)
- useEffect with onAuthStateChanged: sets user, authChecked, calls writeUserProfile, hides splash
- 5-second fallback timeout if onAuthStateChanged never fires
- !authChecked returns null, !user renders LoginScreen, authenticated renders existing app

**ProfileSheet component:**
- Bottom sheet with slide-up animation (profileSlideUp keyframe)
- Shows user.displayName and user.email
- Sign Out button
- Backdrop tap to dismiss

**Tab bar (3 tabs):**
- HOME, VAULT, ACCOUNT
- ACCOUNT tab opens ProfileSheet
- Consistent styling with existing tabs (Outfit font, #fae4cf active, rgba dim inactive)

**Native iOS fixes:**
- AppDelegate.swift: import FirebaseCore + FirebaseApp.configure()
- GoogleService-Info.plist added to Xcode project build phases
- App.entitlements with Sign in with Apple capability
- Info.plist with Google Sign-In REVERSED_CLIENT_ID URL scheme

## Deviations from Plan

1. **Profile icon location:** Plan specified fixed-position top-right icon. After 3 iterations (fixed overlapped step bar, absolute pushed content down, fixed with background blocked text), moved to ACCOUNT tab in bottom nav bar. Better UX and sets up for Phase 5 subscription/usage UI.

2. **SplashScreen launchAutoHide:** Changed from false to true. Manual hide caused stuck splash on app relaunch due to service worker serving stale cached content before auth code could run.

3. **Firestore write silently fails:** writeUserProfile code is in place but Firestore database hasn't been created in Firebase Console yet. No user document is written. This resolves naturally in Phase 2 when Firestore is provisioned.

## Known Stubs

- writeUserProfile: code present but Firestore database not yet created (Phase 2)
- ACCOUNT tab: currently only shows ProfileSheet. Will house usage counter, tier display, upgrade CTA (Phase 5)

## Verified

- [x] Login screen renders with PAKT logo and two OAuth buttons
- [x] Google Sign-In completes and shows NDA details screen
- [x] Session persists across app kill and relaunch (login skipped)
- [x] Sign out returns to login screen
- [x] ACCOUNT tab opens profile sheet with name/email/sign-out
- [x] Firebase Authentication shows user in console
- [ ] Firestore users/{uid} document (deferred to Phase 2 — database not yet created)

## Self-Check: PASSED (with known stub)

All auth components present in index.html:
- [x] function LoginScreen
- [x] function ProfileSheet
- [x] signInWithApple, signInWithGoogle, writeUserProfile, signOutUser
- [x] onAuthStateChanged in App
- [x] SplashScreen.hide call
- [x] signInWithCredential (two-step pattern)
- [x] firestore.collection('users').doc(user.uid).set with merge: true
- [x] tier: 'free' in user profile
- [x] @keyframes profileSlideUp
- [x] Error message "Unable to sign in. Check your connection and try again."
- [x] Capacitor plugin access guarded with typeof check

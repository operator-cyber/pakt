# PAKT Pro Tier — GSD Milestone Brief

## Project Context

PAKT is a mobile NDA signing app built on React (JSX), wrapped with Capacitor for iOS App Store deployment. The free tier is complete and functional: users fill in agreement details, review a unilateral NDA with state-aware legal sections, sign with finger-drawn signatures, complete video verification and biometric authentication via QR code, and export the completed NDA as a high-res PNG. The entire free tier flow works on-device with no backend.

This milestone builds the paid Pro tier and all supporting infrastructure required to ship it. Everything in this milestone ships together at launch. There are no incremental releases.

### Existing Tech Stack
- React JSX codebase (`nda-signer-v2_1.jsx`) running inside a Capacitor iOS wrapper
- Native `addEventListener` with `{ passive: false }` for signature pads (fixes iOS sheet dismissal jiggle)
- Canvas-rendered PNG output (PDF downloads fail in sandboxed iOS webview)
- Google Font "Anton" for title, Georgia serif for body
- Brand colors: Firmament `#0A0F23` (primary), Autumn `#FAE4CF` (secondary)
- Firebase already in use for biometric QR code pinging
- Capacitor as the native bridge for iOS

### What This Milestone Delivers
1. Firebase Authentication (Google Sign-In + Sign with Apple)
2. Firestore database schema and cloud storage for completed NDAs
3. Two additional agreement templates: Non-Compete (NDC) and Bilateral NDA
4. Remote signing flow where the counterparty signs via a web link with no app install required
5. StoreKit subscription paywall at $4.99/month gating Pro features
6. Free tier usage counter: 2 NDAs per calendar month, tied to authenticated user account

---

## Phase 1: Firebase Authentication

### Goal
Add user authentication as the first screen of the app. Every feature in the Pro tier depends on knowing who the user is.

### Requirements
- Sign with Apple (required by Apple for apps offering third-party login)
- Google Sign-In
- Two-button login screen, no email/password, no account creation forms
- Use Capacitor's `@capacitor-firebase/authentication` plugin for native OAuth flows
- After auth, store the Firebase UID and basic profile info (display name, email) in Firestore `users` collection
- Session persistence so users stay logged in across app restarts
- Minimal UI: the login screen should match the existing brand (Firmament/Autumn palette, Georgia font)

### Constraints
- Apple requires Sign with Apple if any third-party login is offered
- Auth state must be checked on app launch to skip login for returning users
- No anonymous auth — every user gets an account, free or pro

### Dependencies
- Firebase Auth module added to existing Firebase config
- Capacitor plugin for native OAuth

---

## Phase 2: Firestore Schema + Cloud Storage

### Goal
Design and implement the backend data model that supports cloud NDA storage, usage counting, and remote signing.

### Requirements

**Firestore Collections:**

`users/{uid}`
- `displayName`: string
- `email`: string
- `tier`: "free" | "pro"
- `createdAt`: timestamp
- `subscriptionExpiry`: timestamp (null for free)

`users/{uid}/ndas/{ndaId}`
- `type`: "unilateral" | "bilateral" | "ndc"
- `status`: "draft" | "pending_countersignature" | "completed"
- `createdAt`: timestamp
- `completedAt`: timestamp (null until complete)
- `disclosingParty`: string
- `receivingParty`: string
- `purpose`: string
- `governingState`: string
- `effectiveDate`: string
- `signerASignature`: storage reference (PNG)
- `signerABiometric`: storage reference (video)
- `signerBSignature`: storage reference (PNG, null until countersigned)
- `signerBBiometric`: storage reference (video, null until countersigned)
- `completedNdaImage`: storage reference (final PNG)
- `remoteSigningToken`: string (null for in-person NDAs)
- `remoteSigningUrl`: string (null for in-person NDAs)

**Firebase Storage Buckets:**
- `signatures/{uid}/{ndaId}/` for signature PNGs
- `biometrics/{uid}/{ndaId}/` for video files
- `completed/{uid}/{ndaId}/` for final NDA images

**Usage Counter Logic:**
- On NDA creation, check count of NDAs created by this user in the current calendar month
- Free tier limit: 2 per calendar month
- Pro tier: unlimited
- Counter resets on the 1st of each month (query by `createdAt` timestamp, not a stored counter)
- When a free user hits the limit, present the upgrade prompt

**"My NDAs" Screen:**
- List view of all NDAs tied to the authenticated user
- Show status (completed, pending countersignature, draft)
- Tap to view the completed NDA image
- Ability to re-download/share the PNG

### Constraints
- All Firestore security rules must enforce that users can only read/write their own data
- Biometric video files will be large; use Firebase Storage, not Firestore document fields
- The completed NDA PNG that currently renders to canvas must also upload to storage on completion

### Dependencies
- Phase 1 (auth) must be complete; all queries are scoped to the authenticated user's UID

---

## Phase 3: NDC + Bilateral NDA Templates

### Goal
Add two additional agreement types to the app, available only to Pro tier users.

### Requirements

**Non-Compete Agreement (NDC):**
- Standard non-compete covering: restricted activities, geographic scope, time period, consideration/compensation clause, severability
- State-aware enforceability notices (California, North Dakota, Oklahoma, and Minnesota largely ban non-competes; other states have varying restrictions)
- Same section-builder architecture as the existing NDA: `buildSections()` function that takes state and returns legal text
- User inputs: Party A name, Party B name, restricted activities description, geographic scope, restriction period, governing state, effective date

**Bilateral NDA:**
- Mutual NDA where both parties are simultaneously disclosing and receiving
- The existing unilateral NDA in the app has Party A as Disclosing Party and Party B as Receiving Party, always one-directional
- The bilateral version makes both parties both discloser and receiver
- Same section structure as unilateral but with mutual language throughout
- User inputs: same as current NDA flow

**Agreement Type Selector:**
- New screen before the details screen: three cards showing NDA, NDC, Bilateral NDA
- Free users see NDA only (other two cards grayed out with a lock icon and "Pro" badge)
- Pro users see all three, tappable
- Selected agreement type flows through the entire pipeline: details → review → sign → done

### Constraints
- Non-compete enforceability varies wildly by state. The state-aware section builder must include enforceability disclaimers for states that restrict or ban them
- The bilateral NDA must be clearly distinguishable in the review screen from the unilateral (header text, introductory language)
- All three agreement types must work with the existing signature pad, biometric, and PNG output flow

### Dependencies
- Phase 2 (Firestore schema) must support the `type` field on NDA documents
- Agreement type is stored in Firestore so cloud storage accurately labels what each document is

---

## Phase 4: Remote Signing Flow

### Goal
Allow User A (the app user) to send an NDA to User B (the counterparty) for signing without User B needing to install the app. This is the flagship Pro feature and the primary conversion driver.

### Requirements

**In-App Flow (User A's side):**
1. User A creates an NDA, fills in details, signs their side, completes their biometric video
2. Instead of handing the phone to User B (current in-person flow), User A taps "Send for Remote Signing"
3. App uploads the partially completed NDA to Firestore with status `pending_countersignature`
4. App generates a unique signing token and constructs a URL pointing to the web signing page
5. User A shares the link via iOS share sheet (iMessage, WhatsApp, email, whatever)
6. App shows a "Waiting for signature" state on that NDA in the My NDAs screen
7. When User B completes signing, a Firestore listener triggers a local notification or in-app update
8. User A sees the completed NDA with both signatures and both biometric records in their storage

**Web Signing Page (User B's side, no app install):**
1. User B taps the link on any mobile device (iOS or Android)
2. Link opens a web page hosted on Firebase Hosting
3. Page displays the NDA text (rendered from Firestore data, not an image)
4. User B reads and scrolls through the agreement
5. User B draws their finger signature on a canvas pad (same UX as the in-app pad)
6. User B completes biometric video capture: the web page activates the device camera using the MediaRecorder API, records a short video (same duration/approach as the in-app version)
7. User B taps "Complete Signing"
8. Signature PNG and biometric video upload to Firebase Storage under User A's NDA document path
9. Firestore document status updates to `completed`
10. User B sees a confirmation screen with PAKT branding and a subtle "Get PAKT for iPhone" prompt (not a gate, just a nudge)

**Web Signing Page Technical Requirements:**
- Hosted on Firebase Hosting as a standalone HTML/JS page
- No frameworks required; vanilla JS is fine
- Must work in Safari (iOS) and Chrome (Android) mobile browsers
- Finger signature canvas must use the same `addEventListener` with `{ passive: false }` approach
- MediaRecorder API for camera capture (check browser support; Safari 14.5+ supports it)
- All uploads go through Firebase JS SDK (client-side, no server needed)
- The signing token in the URL authenticates access to that specific NDA document only (Firestore security rules validate the token)
- Token expires after 7 days or after signing is completed, whichever comes first

### Security Considerations
- The signing token must be unguessable (UUID v4 or similar)
- Firestore rules: the web client can only read the specific NDA document matching the token, and can only write to the signature/biometric fields if status is `pending_countersignature`
- After signing completes, the token is invalidated (status changes to `completed`, rules reject further writes)
- No user account or authentication required for User B

### Constraints
- Zero friction for User B. No app install. No account creation. No login. Tap link → read → sign → camera → done
- MediaRecorder API support must be checked on page load; if the browser doesn't support it, show a fallback message explaining the device requirement
- The web signing page must be mobile-responsive (this is a phone-first product)
- PAKT branding (Firmament/Autumn colors, Georgia font) must be consistent between the app and the web signing page

### Dependencies
- Phase 2 (Firestore schema) must be complete; the remote signing flow reads and writes to the NDA document
- Phase 1 (auth) must be complete; only authenticated Pro users can initiate remote signing

---

## Phase 5: StoreKit Subscription + Paywall

### Goal
Gate all Pro features behind a $4.99/month auto-renewing subscription managed through Apple's StoreKit.

### Requirements

**StoreKit Integration:**
- Use Capacitor plugin `@capacitor-community/in-app-purchases` or equivalent for StoreKit 2
- One subscription product: PAKT Pro at $4.99/month
- Receipt validation: validate the subscription receipt on app launch and store the `tier` and `subscriptionExpiry` in the user's Firestore document
- If subscription lapses, downgrade the user to free tier (existing NDAs remain accessible in cloud storage; new NDA creation limited to 2/month; remote signing disabled; NDC and bilateral templates locked)

**Paywall Screen:**
- Triggered when a free user attempts a Pro action (selecting NDC/bilateral template, exceeding 2 NDAs/month, attempting remote signing)
- Clean, single-screen layout showing what Pro includes:
  - Unlimited NDAs
  - Non-Compete Agreement template
  - Bilateral NDA template
  - Cloud storage for all NDAs
  - Remote signing (counterparty signs via link, no app needed)
  - Biometric video verification on remote signatures
- Price displayed prominently: $4.99/month
- "Subscribe" button triggers StoreKit purchase flow
- "Not now" dismisses and returns to previous screen
- Must comply with Apple's subscription UI guidelines (restore purchases link, terms of service link, privacy policy link)

**Apple Review Compliance:**
- Restore Purchases button must be accessible
- Subscription terms must be clearly visible before purchase
- Links to Privacy Policy and Terms of Service (already drafted, need to be hosted)
- No misleading language about what the subscription includes

### Constraints
- Apple takes 30% of subscription revenue (15% after year one through the Small Business Program if eligible)
- StoreKit product must be configured in App Store Connect before testing
- The paywall must feel native, not like a web modal. Use Capacitor's native dialog patterns where possible
- If the user subscribes mid-session, Pro features must unlock immediately without requiring app restart

### Dependencies
- All previous phases must be complete; the paywall gates features that must exist and function
- Privacy Policy and Terms of Service must be hosted at public URLs before App Store submission

---

## Phase 6: Integration Testing + Apple Review Prep

### Goal
Verify the entire Pro tier flow end-to-end and prepare the build for App Store submission.

### Requirements
- Test complete flow: login → create NDA → sign → biometric → remote sign → cloud storage → paywall → subscribe → unlock
- Test free tier limits: create 2 NDAs, verify the 3rd triggers the paywall
- Test remote signing end-to-end: generate link, open in Safari on a second device, complete signing, verify completion reflects in the app
- Test subscription lifecycle: purchase, verify unlock, simulate lapse, verify downgrade
- Test all three agreement types (NDA, NDC, Bilateral) through the full flow
- Verify Firebase security rules reject unauthorized access attempts
- Verify the web signing page works on both iOS Safari and Android Chrome
- Prepare App Store Connect listing: screenshots, description, subscription product configuration, review notes explaining the remote signing web component
- Host Privacy Policy and Terms of Service at their final URLs

### Apple Review Notes to Include
- Explain that the app includes a web-based remote signing component (Firebase Hosting) that allows counterparties to sign without installing the app
- Provide a demo account or test credentials for the reviewer
- Note that StoreKit sandbox should be used for subscription testing during review

### Constraints
- Apple review typically takes 24-48 hours but can take longer for apps with subscription and web components
- The reviewer will test on a real device; all flows must work outside of development/simulator

### Dependencies
- All previous phases must be complete and verified individually before integration testing

---

## Key Technical Decisions (Do Not Change)

These were solved through extensive trial and error during the free tier build:

1. **Signatures use native `addEventListener` in `useEffect`, NOT React synthetic events.** This is what fixes the iOS artifact sheet jiggle problem. The web signing page must use the same approach.
2. **Output is a canvas-rendered PNG image, NOT a PDF download.** PDF downloads silently fail in Capacitor's sandboxed iOS webview. The PNG approach with long-press save works.
3. **Body scroll is locked during the sign step** via `overflow: hidden` on body/html.
4. **`touch-action: none`** is set on canvas and parent elements.
5. **The NDA is unilateral** (Party A = Disclosing Party, Party B = Receiving Party, always). The bilateral NDA is a separate template, not a modification of the existing one.

---

## Brand Guidelines

- **Firmament:** `#0A0F23` (dark navy) — primary buttons, text, progress bars
- **Autumn:** `#FAE4CF` (warm peach) — backgrounds, secondary buttons
- **Button pattern:** Primary action = Firmament bg + Autumn text. Secondary/back = reverse
- **Fonts:** Georgia serif for body text, Anton for main title, system-ui for UI labels
- **Wordmark font:** Solar Vesta
- **Company:** Class of NØNE LLC, Los Angeles, CA
- **Legal contact:** legal@classofnone.com

---

## How to Use This Brief

When starting GSD, run:

```
/gsd-new-milestone --research
```

Point it at your existing PAKT project folder. When GSD asks what you're building, paste or reference this document. The `--research` flag will spawn a researcher agent to investigate Firebase Auth Capacitor plugins, StoreKit 2 integration patterns, MediaRecorder API browser support, and Firestore security rule patterns for token-based document access.

Then proceed through phases sequentially:

```
/gsd-discuss-phase 1
/gsd-plan-phase 1
/gsd-execute-phase 1
/gsd-verify-work 1
```

Repeat for each phase. Use `--batch` on the discuss phases if you want to answer questions in groups rather than one at a time.

# Requirements: PAKT Pro Tier

**Defined:** 2026-04-13
**Core Value:** Anyone can create, sign, and store a legally compliant NDA from their phone in under two minutes.

## v2.0 Requirements

### Authentication

- [ ] **AUTH-01**: User can sign in with Apple (required by Apple if any third-party login offered)
- [ ] **AUTH-02**: User can sign in with Google
- [ ] **AUTH-03**: Two-button login screen, no email/password, no account creation forms
- [ ] **AUTH-04**: After auth, Firebase UID and profile (display name, email) stored in Firestore users collection
- [ ] **AUTH-05**: Session persists across app restarts (returning users skip login)
- [ ] **AUTH-06**: Login screen matches existing brand (Firmament/Autumn palette, Georgia font)

### Cloud Storage

- [ ] **CLOUD-01**: Firestore users/{uid} collection with displayName, email, tier, createdAt, subscriptionExpiry
- [ ] **CLOUD-02**: Firestore users/{uid}/ndas/{ndaId} subcollection with full NDA metadata
- [ ] **CLOUD-03**: Firebase Storage for signature PNGs, biometric videos, completed NDA images
- [ ] **CLOUD-04**: Firestore security rules enforce users can only read/write their own data
- [ ] **CLOUD-05**: "My NDAs" screen listing all NDAs tied to authenticated user with status indicators
- [ ] **CLOUD-06**: Completed NDA PNG uploads to cloud storage on completion

### Usage Limits

- [ ] **LIMIT-01**: Free tier limited to 2 NDAs per calendar month
- [ ] **LIMIT-02**: Usage counted by querying createdAt timestamps (not stored counter)
- [ ] **LIMIT-03**: Counter resets on 1st of each month
- [ ] **LIMIT-04**: When free user hits limit, upgrade prompt displayed
- [ ] **LIMIT-05**: Pro tier gets unlimited NDAs

### Templates

- [ ] **TMPL-01**: Non-Compete Agreement (NDC) with state-aware enforceability notices
- [ ] **TMPL-02**: NDC covers: restricted activities, geographic scope, time period, consideration, severability
- [ ] **TMPL-03**: NDC state awareness (CA, ND, OK, MN ban non-competes; other states vary)
- [ ] **TMPL-04**: Bilateral NDA with mutual language (both parties disclosing and receiving)
- [ ] **TMPL-05**: Agreement type selector screen (3 cards: NDA, NDC, Bilateral)
- [ ] **TMPL-06**: Free users see NDA only; NDC and Bilateral grayed with lock icon and "Pro" badge
- [ ] **TMPL-07**: Selected type flows through entire pipeline (details > review > sign > done)

### Remote Signing

- [ ] **REMOTE-01**: User A creates NDA, signs their side, taps "Send for Remote Signing"
- [ ] **REMOTE-02**: App uploads partially completed NDA to Firestore with pending_countersignature status
- [ ] **REMOTE-03**: Unique signing token (UUID v4) and URL generated for web signing page
- [ ] **REMOTE-04**: User A shares link via iOS share sheet
- [ ] **REMOTE-05**: "Waiting for signature" state shown in My NDAs screen
- [ ] **REMOTE-06**: Firestore listener triggers update when User B completes signing
- [ ] **REMOTE-07**: Web signing page hosted on Firebase Hosting (standalone HTML/JS, no frameworks)
- [ ] **REMOTE-08**: User B opens link, reads NDA, draws signature, completes biometric video
- [ ] **REMOTE-09**: Web signing page works in Safari (iOS) and Chrome (Android)
- [ ] **REMOTE-10**: Signing token expires after 7 days or after completion
- [ ] **REMOTE-11**: Zero friction for User B: no app install, no account, no login
- [ ] **REMOTE-12**: PAKT branding consistent between app and web signing page

### Subscription

- [ ] **SUB-01**: StoreKit 2 subscription via Capacitor plugin at $4.99/month
- [ ] **SUB-02**: Receipt validation on app launch, tier and subscriptionExpiry stored in Firestore
- [ ] **SUB-03**: Lapsed subscription downgrades to free (existing NDAs accessible, new creation limited)
- [ ] **SUB-04**: Paywall screen triggered on Pro action attempt (NDC/bilateral, exceed limit, remote signing)
- [ ] **SUB-05**: Paywall shows feature list, price, Subscribe button, "Not now" dismiss
- [ ] **SUB-06**: Restore Purchases button accessible (Apple requirement)
- [ ] **SUB-07**: Subscription terms visible before purchase (Apple requirement)
- [ ] **SUB-08**: Privacy Policy and Terms of Service links (Apple requirement)
- [ ] **SUB-09**: Pro features unlock immediately on subscription without app restart

### Integration & Launch

- [ ] **INTG-01**: End-to-end flow tested: login > create > sign > biometric > remote sign > cloud > paywall > subscribe > unlock
- [ ] **INTG-02**: Free tier limit tested (3rd NDA triggers paywall)
- [ ] **INTG-03**: Remote signing tested cross-device (app to Safari, app to Chrome)
- [ ] **INTG-04**: Subscription lifecycle tested (purchase, unlock, lapse, downgrade)
- [ ] **INTG-05**: All three agreement types tested through full flow
- [ ] **INTG-06**: Firebase security rules validated against unauthorized access
- [ ] **INTG-07**: App Store Connect listing prepared (screenshots, description, review notes)
- [ ] **INTG-08**: Privacy Policy and Terms of Service hosted at final URLs

## Future Requirements

### Deferred

- **FUTURE-01**: Annual subscription pricing option
- **FUTURE-02**: Android support
- **FUTURE-03**: Email/password authentication
- **FUTURE-04**: Server-side Cloud Functions

## Out of Scope

| Feature | Reason |
|---------|--------|
| Anonymous auth | Every user gets an account, free or pro |
| Email/password auth | Two-button OAuth only for minimal friction |
| PDF output | Silently fails in iOS webview sandbox (locked decision) |
| Android | iOS first for this milestone |
| Server-side functions | Client-side Firebase SDK sufficient |
| Annual pricing | TBD, deferred to future milestone |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUTH-01 | Phase 1 | Pending |
| AUTH-02 | Phase 1 | Pending |
| AUTH-03 | Phase 1 | Pending |
| AUTH-04 | Phase 1 | Pending |
| AUTH-05 | Phase 1 | Pending |
| AUTH-06 | Phase 1 | Pending |
| CLOUD-01 | Phase 2 | Pending |
| CLOUD-02 | Phase 2 | Pending |
| CLOUD-03 | Phase 2 | Pending |
| CLOUD-04 | Phase 2 | Pending |
| CLOUD-05 | Phase 2 | Pending |
| CLOUD-06 | Phase 2 | Pending |
| LIMIT-01 | Phase 2 | Pending |
| LIMIT-02 | Phase 2 | Pending |
| LIMIT-03 | Phase 2 | Pending |
| LIMIT-04 | Phase 2 | Pending |
| LIMIT-05 | Phase 2 | Pending |
| TMPL-01 | Phase 3 | Pending |
| TMPL-02 | Phase 3 | Pending |
| TMPL-03 | Phase 3 | Pending |
| TMPL-04 | Phase 3 | Pending |
| TMPL-05 | Phase 3 | Pending |
| TMPL-06 | Phase 3 | Pending |
| TMPL-07 | Phase 3 | Pending |
| REMOTE-01 | Phase 4 | Pending |
| REMOTE-02 | Phase 4 | Pending |
| REMOTE-03 | Phase 4 | Pending |
| REMOTE-04 | Phase 4 | Pending |
| REMOTE-05 | Phase 4 | Pending |
| REMOTE-06 | Phase 4 | Pending |
| REMOTE-07 | Phase 4 | Pending |
| REMOTE-08 | Phase 4 | Pending |
| REMOTE-09 | Phase 4 | Pending |
| REMOTE-10 | Phase 4 | Pending |
| REMOTE-11 | Phase 4 | Pending |
| REMOTE-12 | Phase 4 | Pending |
| SUB-01 | Phase 5 | Pending |
| SUB-02 | Phase 5 | Pending |
| SUB-03 | Phase 5 | Pending |
| SUB-04 | Phase 5 | Pending |
| SUB-05 | Phase 5 | Pending |
| SUB-06 | Phase 5 | Pending |
| SUB-07 | Phase 5 | Pending |
| SUB-08 | Phase 5 | Pending |
| SUB-09 | Phase 5 | Pending |
| INTG-01 | Phase 6 | Pending |
| INTG-02 | Phase 6 | Pending |
| INTG-03 | Phase 6 | Pending |
| INTG-04 | Phase 6 | Pending |
| INTG-05 | Phase 6 | Pending |
| INTG-06 | Phase 6 | Pending |
| INTG-07 | Phase 6 | Pending |
| INTG-08 | Phase 6 | Pending |

**Coverage:**
- v2.0 requirements: 48 total
- Mapped to phases: 48
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-13*
*Last updated: 2026-04-13 after milestone v2.0 initialization*

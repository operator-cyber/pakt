# Roadmap: PAKT Pro Tier v2.0

**Created:** 2026-04-13
**Milestone:** v2.0 Pro Tier
**Phases:** 6

## Phase Overview

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Firebase Authentication | AUTH-01 through AUTH-06 | Complete |  |
| 2 | Firestore Schema + Cloud Storage | Complete | CLOUD-01 through CLOUD-06, LIMIT-01 through LIMIT-05 | 5 |
| 3 | NDC + Bilateral NDA Templates | Two additional agreement types, Pro-only, with agreement type selector | TMPL-01 through TMPL-07 | 4 |
| 4 | Remote Signing Flow | User A sends NDA via link; User B signs on web with no app install | REMOTE-01 through REMOTE-12 | 5 |
| 5 | StoreKit Subscription + Paywall | Gate Pro features behind $4.99/month auto-renewing subscription | SUB-01 through SUB-09 | 4 |
| 6 | Integration Testing + Apple Review Prep | Verify entire Pro flow end-to-end; prepare for App Store submission | INTG-01 through INTG-08 | 5 |

## Phase Details

### Phase 1: Firebase Authentication

**Goal:** Add user authentication as the first screen of the app. Every feature in the Pro tier depends on knowing who the user is.

**Requirements:** AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05, AUTH-06

**Plans:** 3/3 plans executed

Plans:
- [x] 01-01-PLAN.md — Bundle all CDN dependencies locally (JS, fonts) and upgrade Firebase SDK to v12.12.0
- [x] 01-02-PLAN.md — Initialize Capacitor iOS project with Firebase Auth plugin and OAuth configuration
- [x] 01-03-PLAN.md — Implement login screen, auth gate, session persistence, Firestore user profile, and profile sheet

**Success Criteria:**
1. User can sign in with Apple and see their name displayed
2. User can sign in with Google and see their name displayed
3. Returning user bypasses login screen on app launch
4. User profile (UID, name, email) is stored in Firestore users collection

**Dependencies:** Firebase Auth module added to existing Firebase config; Capacitor plugin for native OAuth

**Constraints:**
- Apple requires Sign with Apple if any third-party login offered
- Auth state checked on app launch to skip login for returning users
- No anonymous auth

---

### Phase 2: Firestore Schema + Cloud Storage

**Goal:** Design and implement the backend data model that supports cloud NDA storage, usage counting, and remote signing.

**Requirements:** CLOUD-01, CLOUD-02, CLOUD-03, CLOUD-04, CLOUD-05, CLOUD-06, LIMIT-01, LIMIT-02, LIMIT-03, LIMIT-04, LIMIT-05

**Success Criteria:**
1. NDA documents saved to Firestore with full metadata on completion
2. Signature PNGs and biometric videos uploaded to Firebase Storage
3. "My NDAs" screen shows all user's NDAs with correct status
4. Free user creating 3rd NDA in a month sees upgrade prompt
5. Firestore rules reject cross-user data access

**Dependencies:** Phase 1 (auth) — all queries scoped to authenticated UID

**Plans:**
- [x] 02-01-PLAN.md — Create Firestore database, define schema, deploy security rules
- [x] 02-02-PLAN.md — Cloud Storage upload on NDA completion (images + video)
- [x] 02-03-PLAN.md — Usage counting, free tier limits (2/month), upgrade prompt

---

### Phase 3: NDC + Bilateral NDA Templates

**Goal:** Add two additional agreement types available only to Pro tier users.

**Requirements:** TMPL-01, TMPL-02, TMPL-03, TMPL-04, TMPL-05, TMPL-06, TMPL-07

**Success Criteria:**
1. Pro user can create a Non-Compete with state-aware enforceability notices
2. Pro user can create a Bilateral NDA with mutual language throughout
3. Free user sees NDC and Bilateral locked with Pro badge
4. Selected agreement type flows through entire pipeline (details > review > sign > done)

**Dependencies:** Phase 2 (Firestore schema supports type field)

---

### Phase 4: Remote Signing Flow

**Goal:** Allow User A to send an NDA to User B for signing via web link without User B needing the app.

**Requirements:** REMOTE-01 through REMOTE-12

**Success Criteria:**
1. User A can send NDA link via iOS share sheet after signing their side
2. User B opens link in mobile Safari, reads NDA, signs, completes biometric video
3. User A sees completed NDA with both signatures in their storage
4. Signing token expires after 7 days or completion
5. Web signing page works on iOS Safari and Android Chrome

**Dependencies:** Phase 2 (Firestore schema), Phase 1 (auth for Pro users)

---

### Phase 5: StoreKit Subscription + Paywall

**Goal:** Gate all Pro features behind a $4.99/month auto-renewing subscription.

**Requirements:** SUB-01 through SUB-09

**Success Criteria:**
1. Free user attempting Pro action sees paywall with feature list and price
2. Subscribe button triggers StoreKit purchase flow
3. Pro features unlock immediately after subscription without app restart
4. Lapsed subscription downgrades to free tier (existing NDAs accessible)

**Dependencies:** All previous phases (paywall gates features that must exist)

---

### Phase 6: Integration Testing + Apple Review Prep

**Goal:** Verify entire Pro flow end-to-end and prepare for App Store submission.

**Requirements:** INTG-01 through INTG-08

**Success Criteria:**
1. Full flow works: login > create > sign > biometric > remote sign > cloud > paywall > subscribe > unlock
2. Free tier limits enforced correctly
3. Remote signing works cross-device
4. Subscription lifecycle works (purchase, unlock, lapse, downgrade)
5. App Store Connect listing complete with screenshots, description, review notes

**Dependencies:** All previous phases complete and verified individually

---

## Key Technical Decisions (Locked)

1. Signatures use native `addEventListener`, NOT React synthetic events
2. Output is canvas-rendered PNG, NOT PDF
3. Body scroll locked during sign step via `overflow: hidden`
4. `touch-action: none` on canvas and parent elements
5. Unilateral NDA is existing template; Bilateral is separate template, not a modification

---
*Roadmap created: 2026-04-13*
*Last updated: 2026-04-14 — Phase 2 complete, ready for Phase 3*

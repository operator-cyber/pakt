---
gsd_state_version: 1.0
milestone: v2.0
milestone_name: milestone
status: executing
last_updated: "2026-04-15T18:00:00.000Z"
last_activity: 2026-04-15 -- Phase 04 complete — Remote signing deployed, Firebase Hosting live
progress:
  total_phases: 6
  completed_phases: 4
  total_plans: 9
  completed_plans: 9
  percent: 100
---

# State: PAKT Pro Tier

## Current Position

Phase: 04 (remote-signing-flow) — COMPLETE
Plan: 3 of 3 complete
Status: Remote signing fully deployed — Firebase rules, sign.html, index.html send/receive flow
Last activity: 2026-04-15 -- Phase 04 complete, Firebase Hosting deployed at pakt-76a51.web.app

## Project Reference

See: .planning/PROJECT.md (updated 2026-04-13)

**Core value:** Anyone can create, sign, and store a legally compliant NDA from their phone in under two minutes.
**Current focus:** Phase 04 — next phase per ROADMAP

## Accumulated Context

- v1.0 free tier complete and functional (single-file React PWA)
- Capacitor iOS project live (com.classofnone.pakt, Xcode 17, iOS 26.4 simulator)
- Firebase Authentication working (Google Sign-In verified, Apple Sign-In needs real device)
- Firestore database live (nam5 region, security rules deployed)
- Cloud Storage live (NDA images uploading to users/{uid}/ndas/{ndaId}/)
- Firestore NDA documents created on completion with full metadata
- Dual storage: IndexedDB (instant/offline) + Cloud Storage (background)
- Usage counting: query-based, 2 free NDAs/month, auto-resets monthly
- UpgradePrompt shows at limit (non-functional upgrade button until Phase 5)
- ACCOUNT tab shows usage count + FREE/PRO badge
- writeUserProfile uses check-then-write pattern (avoids Firestore rules conflict on tier field)
- atLimit check placed after all hooks (React rules of hooks compliance)
- 3-tab nav: HOME, VAULT, ACCOUNT
- Service worker at pakt-v20
- v1.0 snapshot preserved on branch `v1.0-complete`
- Brief source: .planning/PAKT_Pro_Tier_GSD_Milestone_Brief.md
- Phase 03 complete: Pro type selector (3 cards), Bilateral NDA (mutual language), NCNDA (non-circumvention, enforceable all 50 states, no employment relationship required)
- NDCA → NCNDA swap rationale: non-competes are employer-employee instruments, void/restricted in 15+ states, wrong for freelancer market. NCNDA protects deal introductions under standard contract law.
- agreementType values: 'nda', 'bilateral', 'ncnda' (old 'ndca' vault records display as "Non-Circumvention Agreement" for backward compat)
- Phase 04 complete: Remote signing flow end-to-end. User A signs → uploads sig to Storage + writes RTDB signingRequests/{token} → share link to User B → sign.html (hosted at pakt-76a51.web.app/sign.html) shows NDA, collects sig, uploads, sets status='complete' → Vault RTDB listener detects completion → downloads both sigs → regenerates full NDA PNG → saves to Firestore/Storage → cleans RTDB
- generateNdaPng() extracted as global async function so Vault completion handler can call it outside React component
- RTDB signingRequests/{token}: public read/write (token = UUID, unguessable = security). Expiry 72h enforced in sign.html
- Storage signingRequests/{token}/: public read/write. Users/{uid}/ path requires Firebase Auth.

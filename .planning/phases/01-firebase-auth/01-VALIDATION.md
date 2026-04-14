---
phase: 1
slug: firebase-auth
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-13
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual verification (no test framework — single-file PWA with no build system) |
| **Config file** | none |
| **Quick run command** | `python3 -m http.server 8080` + verify in browser |
| **Full suite command** | `npx cap sync && npx cap open ios` + verify on device/simulator |
| **Estimated runtime** | ~60 seconds (build + launch) |

---

## Sampling Rate

- **After every task commit:** Verify index.html loads without errors in browser
- **After every plan wave:** Full Capacitor build + iOS simulator launch
- **Before `/gsd-verify-work`:** Complete auth flow tested on simulator
- **Max feedback latency:** 60 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 1-01-01 | 01 | 0 | Prereq | manual | Verify Xcode installed: `xcode-select -p` | ⬜ pending |
| 1-01-02 | 01 | 0 | Prereq | manual | Verify CocoaPods: `pod --version` | ⬜ pending |
| 1-02-01 | 02 | 1 | AUTH-01..06 | manual | Local deps load: `python3 -m http.server 8080`, check console for errors | ⬜ pending |
| 1-03-01 | 03 | 2 | AUTH-01..06 | manual | `npx cap sync && npx cap build ios` exits 0 | ⬜ pending |
| 1-04-01 | 04 | 3 | AUTH-01,02 | manual | Sign in with Apple on simulator, verify UID in Firestore | ⬜ pending |
| 1-04-02 | 04 | 3 | AUTH-03 | manual | Two-button login screen visible, no email/password | ⬜ pending |
| 1-04-03 | 04 | 3 | AUTH-04 | manual | After sign-in, users/{uid} document exists in Firestore | ⬜ pending |
| 1-04-04 | 04 | 3 | AUTH-05 | manual | Kill app, relaunch, login screen skipped | ⬜ pending |
| 1-04-05 | 04 | 3 | AUTH-06 | manual | Login screen uses Firmament/Autumn palette, Georgia font | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Xcode installed (App Store, ~12GB)
- [ ] CocoaPods installed (`sudo gem install cocoapods`)
- [ ] Apple Developer Program membership active for com.classofnone.pakt

*These are manual prerequisites that must be completed before code tasks begin.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Sign with Apple flow | AUTH-01 | Requires real Apple ID + device/simulator | Tap Sign with Apple, complete Apple ID flow, verify name displayed |
| Google Sign-In flow | AUTH-02 | Requires Google OAuth client configured | Tap Sign in with Google, complete Google flow, verify name displayed |
| Session persistence | AUTH-05 | Requires app lifecycle testing | Sign in, force-kill app, relaunch, verify login skipped |
| Profile sheet sign-out | D-12..D-14 | UI interaction testing | Tap profile icon, verify sheet shows name/email/sign-out, tap sign-out |

---

## Validation Sign-Off

- [ ] All tasks have manual verify steps defined
- [ ] Wave 0 prerequisites documented
- [ ] Sampling continuity maintained
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

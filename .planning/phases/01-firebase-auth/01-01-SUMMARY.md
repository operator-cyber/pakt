---
phase: 01-firebase-auth
plan: "01"
subsystem: infrastructure
tags: [dependencies, firebase, fonts, service-worker, apple-guideline-2.5.2]
dependency_graph:
  requires: []
  provides: [local-lib-dependencies, firebase-v12-sdk, local-fonts]
  affects: [index.html, sw.js, all-subsequent-plans]
tech_stack:
  added:
    - React 18.3.1 (local UMD build)
    - Babel standalone 7.29.2 (local)
    - Firebase compat SDK v12.12.0 (app, database, auth, firestore)
    - qrcode-generator 1.4.4 (local)
    - Instrument Serif woff2 (local, latin subset)
    - Outfit Variable woff2 (local, latin subset)
  patterns:
    - local lib/ directory for all JS and font dependencies
    - @font-face declarations replacing Google Fonts CDN link
    - service worker SHELL array caching all lib/ assets
key_files:
  created:
    - lib/react.production.min.js
    - lib/react-dom.production.min.js
    - lib/babel.min.js
    - lib/qrcode.min.js
    - lib/firebase-app-compat.js
    - lib/firebase-database-compat.js
    - lib/firebase-auth-compat.js
    - lib/firebase-firestore-compat.js
    - lib/InstrumentSerif-Regular.woff2
    - lib/InstrumentSerif-Italic.woff2
    - lib/Outfit-Variable.woff2
  modified:
    - index.html
    - sw.js
decisions:
  - "Firebase upgraded from v10.12.0 to v12.12.0 (required by @capacitor-firebase/authentication v8 peer dependency)"
  - "Downloaded latin-subset-only woff2 files to minimize bundle size (Anton font not used in CSS, not downloaded)"
  - "firebase.auth() and firebase.firestore() globals initialized at startup for use by Plan 03"
  - "Outfit is a variable font — single woff2 file covers all weights (100-900)"
metrics:
  duration_seconds: 99
  completed_date: "2026-04-14"
  tasks_completed: 3
  tasks_total: 3
  files_created: 11
  files_modified: 2
---

# Phase 01 Plan 01: Bundle Local Dependencies Summary

All JS and font dependencies moved from CDN to local lib/ directory, Firebase SDK upgraded to v12.12.0, service worker updated to pakt-v16 caching all lib/ assets.

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Download all JS deps and fonts to lib/ | 11bb0ec | lib/*.js, lib/*.woff2 (11 files) |
| 2 | Replace CDN references in index.html | c71eadd | index.html |
| 3 | Update service worker cache to pakt-v16 | f4834db | sw.js |

## What Was Built

11 files downloaded to lib/:
- React 18.3.1 UMD + ReactDOM (10K + 129K)
- Babel standalone 7.29.2 (3.0MB)
- qrcode-generator 1.4.4 (55K)
- Firebase compat SDK v12.12.0: app (31K), database (160K), auth (135K), firestore (336K)
- Instrument Serif Regular woff2 + Italic woff2 (15K each, latin subset)
- Outfit Variable woff2 (31K, latin subset)

index.html changes:
- 6 CDN script tags replaced with 8 local lib/ script tags (added firebase-auth-compat.js and firebase-firestore-compat.js)
- Google Fonts link tag removed
- 3 @font-face declarations added (Instrument Serif regular, italic, Outfit variable)
- firebase.auth() and firebase.firestore() instances initialized after firebase.initializeApp()

sw.js changes:
- Cache version bumped from pakt-v15 to pakt-v16
- SHELL array expanded from 7 to 19 entries (all lib/ files added)

## Decisions Made

1. Firebase upgraded v10.12.0 to v12.12.0 — required by @capacitor-firebase/authentication v8 peer dependency (Plan 03 prerequisite).
2. Anton font not downloaded — confirmed not referenced anywhere in app CSS.
3. Outfit is a variable font serving all weights from one woff2 file; weight range declared as `100 900` in @font-face.
4. firebase.auth() and firebase.firestore() initialized now so Plan 03 can use them without re-initialization.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — this plan is infrastructure only, no UI or data flow changes.

## Threat Flags

None — no new network endpoints, auth paths, or trust boundaries introduced. Files downloaded from official CDNs (unpkg.com, gstatic.com, fonts.gstatic.com). Firebase version string "12.12.0" confirmed present in firebase-app-compat.js (T-01-01 mitigation verified).

## Self-Check: PASSED

Files verified:
- lib/react.production.min.js: FOUND (10K)
- lib/firebase-app-compat.js: FOUND (31K, contains "12.12.0")
- lib/firebase-auth-compat.js: FOUND (135K)
- lib/firebase-firestore-compat.js: FOUND (336K)
- lib/InstrumentSerif-Regular.woff2: FOUND (15K)
- lib/Outfit-Variable.woff2: FOUND (31K)

Commits verified:
- 11bb0ec: chore(01-01): download all JS deps and fonts to lib/
- c71eadd: feat(01-01): replace CDN refs with local lib/ paths and add font-face
- f4834db: chore(01-01): bump service worker to pakt-v16, cache all lib/ files

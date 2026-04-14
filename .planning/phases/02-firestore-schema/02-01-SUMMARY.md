---
phase: 02-firestore-schema
plan: "01"
subsystem: backend
tags: [firestore, security-rules, cloud-storage, user-profile]
dependency_graph:
  requires: [01-03]
  provides: [firestore-database, storage-bucket, security-rules, user-profile-write]
  affects: [index.html, firestore.rules, storage.rules]
tech_stack:
  added:
    - Firestore database (nam5 region, project pakt-76a51)
    - Cloud Storage bucket (pakt-76a51.firebasestorage.app)
  patterns:
    - User-scoped Firestore rules (request.auth.uid == userId)
    - Separate create vs update rules to protect server-managed fields (tier, subscriptionExpiry)
    - writeUserProfile checks doc existence before write to avoid update rule conflict
key_files:
  created:
    - firestore.rules
    - storage.rules
  modified:
    - index.html (writeUserProfile refactored to check-then-write)
decisions:
  - "writeUserProfile uses get() then conditional set/update instead of set({merge:true}) to avoid Firestore rules blocking tier field on updates"
  - "Firestore rules block client writes to tier and subscriptionExpiry fields (server-managed in Phase 5)"
  - "Cloud Storage rules enforce users/{uid}/ path scoping"
  - "Firestore and Storage both in nam5 (us-central) region"
metrics:
  completed_date: "2026-04-14"
  tasks_completed: 4
  tasks_total: 4
---

# Phase 02 Plan 01: Firestore Database + Security Rules Summary

Firestore database and Cloud Storage created in Firebase Console. Security rules deployed enforcing user-scoped access. writeUserProfile verified writing users/{uid} documents on sign-in.

## Tasks Completed

| Task | Name | Status |
|------|------|--------|
| 1 | Create Firestore database and enable Cloud Storage | Done (human action) |
| 2 | Create firestore.rules and storage.rules files | Done |
| 3 | Deploy security rules in Firebase Console | Done (human action) |
| 4 | Verify writeUserProfile writes to Firestore | Done |

## What Was Built

Firestore database created in nam5 region with security rules:
- users/{userId}: authenticated user can read, create; update allowed but blocks tier/subscriptionExpiry changes
- users/{userId}/ndas/{ndaId}: authenticated user full read/write on own subcollection
- Default deny on all other paths

Cloud Storage bucket enabled with rules:
- users/{userId}/{allPaths=**}: authenticated user read/write on own path
- Default deny on all other paths

writeUserProfile refactored from `set({merge: true})` to check-then-write pattern:
- If doc exists: `update()` with only displayName and email (avoids triggering tier protection rule)
- If doc doesn't exist: `set()` with all fields including tier: "free" and subscriptionExpiry: null

## Bug Fix

Original `set({merge: true})` included `tier` in the payload. Firestore's `affectedKeys()` includes all keys in the write regardless of value change. This caused the update rule to reject subsequent sign-ins. Fixed by splitting into conditional get/update/set.

## Verification

- Firestore Console shows users/{uid} document with uid, displayName, email, tier: "free", createdAt, subscriptionExpiry: null
- Security rules published (not test mode)
- firestore.rules and storage.rules files in project root

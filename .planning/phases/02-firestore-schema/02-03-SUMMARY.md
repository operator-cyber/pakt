---
phase: 02-firestore-schema
plan: "03"
subsystem: monetization
tags: [usage-limits, free-tier, upgrade-prompt, account-tab]
dependency_graph:
  requires: [02-02]
  provides: [usage-counting, tier-gating, upgrade-prompt, account-usage-display]
  affects: [index.html]
tech_stack:
  patterns:
    - Query-based usage counting (no stored counter, auto-resets monthly)
    - Firestore where clause on createdAt >= first of month
    - App-level state for monthlyUsage and userTier, fetched on auth
    - onNdaCreated callback for immediate local count increment
key_files:
  modified:
    - index.html (getMonthlyUsage, getUserTier, UpgradePrompt, ProfileSheet usage display, NDA atLimit check)
decisions:
  - "FREE_NDA_LIMIT = 2 per calendar month"
  - "Usage count is query-based (Firestore createdAt >= firstOfMonth), not a stored counter — auto-resets, can't be manipulated client-side"
  - "atLimit check placed AFTER all React hooks to avoid conditional hook execution (React rules of hooks)"
  - "UpgradePrompt shows at step 0 only — in-progress NDA (step > 0) not blocked"
  - "Upgrade to Pro button is non-functional until Phase 5 (StoreKit)"
  - "onNdaCreated increments local count immediately so ACCOUNT reflects new NDA without re-querying"
metrics:
  completed_date: "2026-04-14"
  tasks_completed: 4
  tasks_total: 4
---

# Phase 02 Plan 03: Usage Limits + Upgrade Prompt Summary

Free tier limited to 2 NDAs per calendar month. Usage displayed in ACCOUNT tab. UpgradePrompt blocks 3rd NDA attempt.

## Tasks Completed

| Task | Name | Status |
|------|------|--------|
| 1 | Add getMonthlyUsage, getUserTier, usage state to App | Done |
| 2 | Add limit check and UpgradePrompt to NDA flow | Done |
| 3 | Add usage display to ProfileSheet (ACCOUNT tab) | Done |
| 4 | Verify usage limits on iOS simulator | Done |

## What Was Built

Functions:
- `getMonthlyUsage(uid)` — queries Firestore ndas subcollection where createdAt >= first of month, returns count
- `getUserTier(uid)` — reads tier from Firestore user doc, defaults to "free"

Constants:
- `FREE_NDA_LIMIT = 2`

Components:
- `UpgradePrompt({ usage, limit })` — lock icon, "Monthly Limit Reached", usage count, Upgrade to Pro button (non-functional until Phase 5), $4.99/month label

App-level state:
- `monthlyUsage` (number) — fetched on auth via fetchUsage useEffect
- `userTier` (string) — fetched alongside usage

NDA component:
- `atLimit` computed from userTier and monthlyUsage
- Check placed after ALL hooks (before JSX return) to comply with React rules of hooks
- Returns UpgradePrompt at step 0 when free user at limit

ProfileSheet (ACCOUNT tab):
- Shows "X / 2 NDAs created" for free users
- Shows "X Unlimited NDAs" for pro users
- FREE/PRO badge with color coding

## Bug Fix

Original atLimit early return was placed before useMemo/useEffect hooks in the NDA component. When monthlyUsage changed from 0 to 2 (async Firestore query), the early return skipped hooks that ran on the first render, violating React's rules of hooks. Caused React error #300 crash to black screen. Fixed by moving the early return after all hooks.

## Verification

- ACCOUNT tab shows "3 / 10" (limit temporarily bumped for testing, reverted to 2)
- UpgradePrompt displayed correctly at 2/2 with lock icon and upgrade button
- Pro tier check in place (tier !== 'pro' gates the limit)
- Monthly reset is automatic (query-based)

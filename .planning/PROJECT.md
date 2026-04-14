# PAKT — Pro Tier

## What This Is

Mobile-first mutual NDA generator, signer, and vault with a paid Pro tier. React JSX app wrapped with Capacitor for iOS App Store. Free tier: 2 NDAs per calendar month with the existing unilateral NDA flow. Pro tier ($4.99/month): unlimited NDAs, bilateral NDA template, non-compete (NDC) template, remote signing, and cloud storage.

## Core Value

Anyone can create, sign, and store a legally compliant NDA from their phone in under two minutes, with zero legal knowledge required.

## Current Milestone: v2.0 Pro Tier

**Goal:** Build the paid Pro tier and all supporting infrastructure required to ship it. Everything ships together at launch.

**Target features:**
- Firebase Authentication (Google Sign-In + Sign with Apple)
- Firestore database schema and cloud storage for completed NDAs
- NDC and Bilateral NDA templates (Pro-only)
- Remote signing flow (counterparty signs via web link, no app install)
- StoreKit subscription paywall at $4.99/month
- Free tier usage counter (2 NDAs per calendar month)
- Integration testing and Apple Review prep

## Requirements

### Validated

- ✓ Unilateral NDA flow (5-step: Details > Review > Sign > Verify > Complete) — v1.0
- ✓ 50-state jurisdiction-aware legal compliance engine — v1.0
- ✓ Finger-drawn signature pads (native addEventListener, not React synthetic) — v1.0
- ✓ Canvas-rendered PNG output (not PDF — iOS webview sandbox) — v1.0
- ✓ Biometric verification via QR code + Firebase handshake — v1.0
- ✓ Video witness recording (MediaRecorder API, front camera) — v1.0
- ✓ Local vault storage (IndexedDB) — v1.0
- ✓ Privacy policy (in-app + hosted) — v1.0
- ✓ Apple App Store audit compliance items — v1.0

### Active

- [ ] Firebase Authentication (Sign with Apple + Google Sign-In)
- [ ] Firestore schema (users, NDAs, usage counting)
- [ ] Cloud storage for signatures, biometrics, completed NDAs
- [ ] NDC template with state-aware enforceability
- [ ] Bilateral NDA template
- [ ] Agreement type selector (free vs Pro gating)
- [ ] Remote signing flow (web signing page, Firebase Hosting)
- [ ] StoreKit subscription ($4.99/month)
- [ ] Paywall screen
- [ ] Free tier usage counter (2/month)
- [ ] Integration testing
- [ ] Apple Review prep

### Out of Scope

- Email/password auth — Two-button OAuth only (Apple + Google)
- Anonymous auth — Every user gets an account
- Server-side functions — Client-side Firebase SDK only
- Android — iOS first
- Annual pricing — TBD, not in this milestone

## Context

The free tier is complete and functional. The entire app is a single HTML file (index.html, ~1650 lines) with inline JSX transpiled by Babel. Firebase is already in use for biometric QR verification. Capacitor wrap is NOT yet done but is assumed for this milestone (native OAuth and StoreKit require it). The brief assumes Capacitor is the native bridge.

Key technical decisions from v1.0 are locked (see Key Decisions below).

## Constraints

- **Apple Guidelines**: Sign with Apple required if any third-party login offered
- **StoreKit**: Apple takes 30% (15% after year one via Small Business Program)
- **Architecture**: Single-file React JSX with Babel transpilation, no build system
- **Firebase**: Already configured (project pakt-76a51), Realtime Database in use
- **Output**: Canvas-rendered PNG, NOT PDF (locked decision)
- **Signatures**: Native addEventListener, NOT React synthetic events (locked decision)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| PNG not PDF output | PDF downloads silently fail in Capacitor iOS webview | ✓ Good |
| Native addEventListener for signatures | Fixes iOS sheet dismissal jiggle | ✓ Good |
| Firebase Realtime DB for biometric handshake | Simple pub/sub for QR verification | ✓ Good |
| Two-button OAuth only (Apple + Google) | Minimal friction, Apple requires Sign with Apple | — Pending |
| $4.99/month subscription | Single tier, StoreKit managed | — Pending |
| 2 free NDAs per calendar month | Query by createdAt, not stored counter | — Pending |
| Client-side Firebase SDK only | No server-side functions needed | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-13 after milestone v2.0 initialization*

# Phase 1: Firebase Authentication - Context

**Gathered:** 2026-04-13
**Status:** Ready for planning

<domain>
## Phase Boundary

Initialize Capacitor native bridge, then add Firebase Authentication as a hard-gated first screen. Sign with Apple + Google Sign-In. Two-button login, no email/password. Session persistence so returning users skip login. Profile sheet with sign-out. This phase delivers the native project shell and authenticated user identity that every subsequent phase depends on.

</domain>

<decisions>
## Implementation Decisions

### Capacitor initialization (prerequisite to auth)
- **D-01:** Capacitor setup is the first task in this phase, before any auth work. Run `cap init`, `cap add ios`, install bridge dependencies, verify native project builds.
- **D-02:** Bundle JS dependencies locally first (React, ReactDOM, Babel, Firebase, qrcode-generator) — Apple Guideline 2.5.2 rejects CDN scripts. Download to `lib/` directory, replace CDN `<script>` tags with local paths.
- **D-03:** Download fonts locally (Instrument Serif, Outfit) with `@font-face` declarations. Remove Google Fonts `<link>` tags.
- **D-04:** Install Capacitor plugins: `@capacitor-firebase/authentication` for native OAuth, `@capacitor/status-bar`, `@capacitor/splash-screen`.
- **D-05:** Bundle ID: `com.classofnone.pakt`, deployment target iOS 16.0, version 1.0.0.

### Login screen
- **D-06:** Hard gate. Every user must sign in before using the app. No bypass, no "browse first" option. The free tier counter requires a Firebase UID to function.
- **D-07:** Two-button layout: Sign with Apple (primary) and Sign in with Google (secondary). No email/password, no account creation forms.
- **D-08:** Login screen matches existing brand: Firmament #0A0F23 background, Autumn #FAE4CF text/buttons, Georgia serif font. PAKT logo at top.
- **D-09:** Use `@capacitor-firebase/authentication` plugin for native OAuth flows (Apple and Google).

### Session persistence
- **D-10:** Auth state checked on app launch. If user is already signed in, skip login screen entirely and go straight to the NDA flow.
- **D-11:** After auth, store Firebase UID, display name, and email in Firestore `users` collection. This is the foundation for all future user-scoped data.

### Sign-out
- **D-12:** Profile icon in the top corner of the home/details screen. Tap to open a simple profile sheet that slides up.
- **D-13:** Profile sheet shows user's name, email, and a sign-out button. No settings, no preferences. The app doesn't have enough settings to justify more.
- **D-14:** Sign-out clears auth state and returns to the login screen.

### Error handling
- **D-15:** Single error state on login screen: centered message "Unable to sign in. Check your connection and try again." with a Retry button underneath.
- **D-16:** No elaborate error differentiation for the user. Log specific error details to console for debugging.

### Claude's Discretion
- Loading state during auth (spinner, skeleton, etc.)
- Exact animation for profile sheet slide-up
- Sign with Apple button styling (Apple has HIG requirements for their button — follow those)
- Google Sign-In button styling (Google has brand guidelines — follow those)
- Firestore `users` document structure beyond UID/name/email (add fields if needed for future phases)

</decisions>

<specifics>
## Specific Ideas

- The login friction is one tap (Sign with Apple) on an iPhone — that's acceptable for a hard gate
- Profile sheet is minimal: name, email, sign-out. Not a settings screen. Not a tab. Just a sheet.
- Capacitor must be verified building before auth work begins — no point building auth UI if the native shell doesn't compile

</specifics>

<canonical_refs>
## Canonical References

### Milestone brief
- `.planning/PAKT_Pro_Tier_GSD_Milestone_Brief.md` — Full 6-phase milestone plan, Phase 1 section has requirements, constraints, dependencies

### Existing codebase
- `CLAUDE.MD` — Complete architecture reference, component inventory, locked technical decisions, design system (colors, fonts, icons)
- `index.html` — Entire app source (React components, styles, Firebase config, legal engine)
- `sw.js` — Service worker, needs cache version bump after bundling local deps
- `manifest.json` — PWA manifest

### Apple compliance
- `CLAUDE.MD` § "Apple App Store Audit Status" — Completed audit items and remaining blockers
- `CLAUDE.MD` § "Capacitor Phase — Next Session Priorities" — Detailed Capacitor setup steps (1A through 1D)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Firebase is already configured (project pakt-76a51) for Realtime Database — Auth module adds to existing config
- App component handles routing (checks `?verify=` param, renders tab bar + views) — login gate inserts before this
- Brand colors and fonts already defined in `<style>` block — login screen inherits

### Established Patterns
- Single-file architecture (everything in index.html) — auth components go in the same file
- React 18 with inline JSX + Babel transpilation — no build system
- Native `addEventListener` in `useEffect` for touch interactions (locked decision)
- `window.scrollTo(0,0)` on every step change

### Integration Points
- App component top-level: login gate wraps entire app, checks auth state before rendering NDA/Vault views
- Firebase config block in index.html: add Auth import alongside existing Realtime Database
- Tab bar: profile icon added to existing fixed bottom nav or home screen header

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-firebase-auth*
*Context gathered: 2026-04-13*

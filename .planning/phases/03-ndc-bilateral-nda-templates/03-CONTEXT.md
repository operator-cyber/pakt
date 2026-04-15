# Phase 03: NDC + Bilateral NDA Templates - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning

<domain>
## Phase Boundary

Add two new agreement types (Non-Disclosure & Non-Compete Agreement and Bilateral NDA) to the existing app, gated behind Pro tier. Free users continue to see only the unilateral NDA flow. Pro users get an agreement type selector before the details screen. All three types flow through the existing 5-step pipeline (Details > Review > Sign > Verify > Complete). NDCA legal text generation is deferred to the final wave pending deep research.

</domain>

<decisions>
## Implementation Decisions

### Agreement Type Selector
- **D-01:** Free users skip the selector entirely. They land directly on the unilateral NDA details screen, same flow as current app. No UI change for free users.
- **D-02:** Pro users see a new agreement type selector screen when tapping "New Agreement." Three cards: Unilateral NDA, Bilateral NDA, NDCA (Non-Disclosure & Non-Compete Agreement). Tapping a card proceeds to the details screen with fields adapted to that type.
- **D-03:** App checks user tier on launch and routes accordingly. Pro users see selector first, free users go straight to NDA form.

### NDCA Form Fields
- **D-04:** NDCA has a completely different details screen than NDA. Different field set, same layout pattern and brand styling.
- **D-05:** NDCA fields: restricted activities description, geographic scope, restriction time period (dropdown: 6 months, 1 year, 2 years), consideration/compensation description (what the restricted party receives in exchange), governing state.
- **D-06:** Build the NDCA form UI now. The legal text generation function (`buildNdcaSections`) will be added in the final wave once research data arrives.
- **D-07:** NDCA review screen shows "NDCA legal text pending research data" until the final wave. DO NOT write placeholder NDCA legal text.

### Bilateral NDA Approach
- **D-08:** Same form fields as unilateral NDA. Only the generated legal text changes.
- **D-09:** Build a separate `buildBilateralSections()` function with mutual language throughout. Both parties are simultaneously disclosing and receiving.
- **D-10:** Signature step stays the same (Party A and Party B both sign).
- **D-11:** Review screen header changes to "MUTUAL NON-DISCLOSURE AGREEMENT" and intro paragraph reflects both parties as mutual disclosers and recipients.
- **D-12:** Bilateral NDA is fully unblocked and can be built immediately.

### State Enforceability for NDCA
- **D-13:** Two deep research reports will be placed in research/ folder. Claude report is primary source, Gemini is secondary for cross-referencing only. Conflicts resolved in favor of Claude report.
- **D-14:** When research arrives, build: STATE_DATA object with per-state NDCA rules, `buildNdcaSections(state, formData)` function with conditional legal text, and enforceability warnings for ban states (CA, ND, OK, MN).
- **D-15:** Ban states show a prominent warning banner but still allow document creation. Do not block NDCA creation in any state.
- **D-16:** All NDCA legal text generation (buildNdcaSections, STATE_DATA for NDCA) is the FINAL wave of Phase 3. Everything else can be built first.

### Pro Gating
- **D-17:** Free users see NDA only (no selector, no locked cards). NDC and Bilateral are invisible to free users, not grayed out.
- **D-18:** Pro gating check uses existing `userTier` state from Phase 2.

### Claude's Discretion
- Card styling for agreement type selector (consistent with existing Firmament/Autumn palette)
- Layout of NDCA form fields (follow existing NDA form patterns)
- Specific mutual language for bilateral NDA sections (legal best practices)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Legal Templates
- `index.html` lines 476-498 — `buildSections()` function (unilateral NDA legal text generation pattern)
- `index.html` lines 339-395 — `STATE_DATA` object (50-state jurisdiction data)
- `index.html` lines 457-465 — `INFO_CATEGORIES` (category definitions for NDA)
- `index.html` lines 500-513 — `getComplianceItems()` (state compliance checklist)

### Pro Tier Infrastructure
- `index.html` lines 225 — `FREE_NDA_LIMIT`, `getMonthlyUsage`, `getUserTier`
- `index.html` lines 1108-1134 — `UpgradePrompt` component
- `.planning/phases/02-firestore-schema/02-CONTEXT.md` — Phase 2 decisions (Firestore schema, type field)

### Research (pending)
- `research/` folder — NDCA state enforceability reports (Claude primary, Gemini secondary). Not yet available. Final wave depends on these.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `buildSections(state, categories, customCategory)` — pattern for generating legal text sections. Bilateral NDA should follow same structure with mutual language.
- `STATE_DATA` — 50-state jurisdiction data. NDCA will need its own state data object or extension.
- `INFO_CATEGORIES` — category definitions. NDCA will not use these (different field set).
- `UpgradePrompt` component — Pro gating UI already built.
- `getComplianceItems(state)` — compliance checklist. NDCA will need its own version.
- `userTier` state in App component — already tracks free vs pro.

### Established Patterns
- Single-file architecture (all code in index.html)
- JSX with Babel runtime transpilation
- React functional components with hooks
- `useMemo` for derived legal text (sections, compliance)
- Step-based flow managed by `step` state variable
- Form state managed by single `form` object with `setForm`

### Integration Points
- NDA component receives `userTier` prop — use this to show/skip type selector
- `saveToVault` and `uploadNdaToCloud` already handle `type` field
- Firestore NDA document schema has `type: "nda" | "ndc" | "bilateral"` ready
- `form` state needs extending for NDCA-specific fields
- `buildSections` is called in `useMemo` — new functions follow same pattern

</code_context>

<specifics>
## Specific Ideas

- NDCA = "Non-Disclosure & Non-Compete Agreement" (not just "NDC")
- Agreement type selector uses card-based UI (three cards)
- Free users never see the selector — invisible, not grayed/locked
- NDCA review screen shows explicit placeholder text ("NDCA legal text pending research data") until final wave
- Bilateral NDA review header: "MUTUAL NON-DISCLOSURE AGREEMENT"
- NDCA consideration field is legally required for enforceability in most states — this is a must-have field

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

## Wave Structure (for planner)

Phase 3 must be structured so that all NDCA legal text generation is the final wave:

**Wave 1 (unblocked):** Agreement type selector, Pro routing, form field adaptation for NDCA (UI only), bilateral NDA complete (form + legal text + review)
**Wave 2 (unblocked):** NDCA form UI complete, NDCA review screen with placeholder, type flows through full pipeline (sign > verify > complete)
**Final Wave (blocked on research):** `buildNdcaSections()`, NDCA `STATE_DATA`, enforceability warnings, NDCA review screen with real legal text

---

*Phase: 03-ndc-bilateral-nda-templates*
*Context gathered: 2026-04-14*

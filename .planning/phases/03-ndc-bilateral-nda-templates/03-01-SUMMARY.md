---
phase: 03-ndc-bilateral-nda-templates
plan: "01"
subsystem: ui
tags: [react, nda, bilateral, ndca, legal-templates, pro-tier]

# Dependency graph
requires:
  - phase: 02-firestore-schema
    provides: userTier state, FREE_NDA_LIMIT, UpgradePrompt component
provides:
  - Agreement type selector (3-card UI for Pro users)
  - NDCA details form with 5 specific fields
  - buildBilateralSections() mutual NDA legal text generator
  - Dynamic review screen headers and intro paragraphs
  - Dynamic signature labels (Disclosing/Receiving vs Party A/B)
affects: [03-02, 03-03, 04-remote-signing]

# Tech tracking
tech-stack:
  added: []
  patterns: [agreementType state routing, conditional form rendering, bilateral legal text generation]

key-files:
  created: []
  modified: [index.html]

key-decisions:
  - "NDCA form and type selector implemented together since both modify step 0 rendering in the same file"
  - "Bilateral sections use mutual language (each Party) throughout all 12 sections"
  - "NDCA review shows explicit placeholder per D-07 pending research data"
  - "Free user auto-set to NDA via useEffect rather than conditional render"

patterns-established:
  - "agreementType state controls form routing, section building, review rendering, and signature labels"
  - "buildBilateralSections follows exact same {t, b} array pattern as buildSections for pipeline compatibility"

requirements-completed: [TMPL-04, TMPL-05, TMPL-06]

# Metrics
duration: 6min
completed: 2026-04-15
---

# Phase 03 Plan 01: Agreement Type Selector, NDCA Form, and Bilateral NDA Summary

**Pro users get 3-card agreement type selector routing to unilateral NDA, bilateral NDA (with full mutual legal text), or NDCA (form-only, legal text deferred to final wave)**

## Performance

- **Duration:** 6 min
- **Started:** 2026-04-15T03:17:15Z
- **Completed:** 2026-04-15T03:23:21Z
- **Tasks:** 3
- **Files modified:** 1

## Accomplishments
- Pro users see type selector with three cards (NDA, Mutual NDA, Non-Compete) when creating new agreement
- Free users skip selector entirely and land on NDA form directly (invisible gating per D-17)
- Bilateral NDA generates full mutual legal text via buildBilateralSections() with 12 sections using "each Party" language
- NDCA details form collects restricted activities, geographic scope, time period, consideration, and governing state
- Review screen dynamically adapts header, intro paragraph, and legal text based on agreement type
- Signature labels show "Disclosing Party/Receiving Party" for unilateral, "Party A/Party B" for bilateral and NDCA

## Task Commits

Each task was committed atomically:

1. **Task 1+2: Agreement type selector + NDCA details form** - `402ea85` (feat)
2. **Task 3: Bilateral NDA legal text + review screen adaptation** - `97f3b34` (feat)

_Note: Tasks 1 and 2 were committed together because both modify step 0 rendering in the same single-file architecture and cannot be separated._

## Files Created/Modified
- `index.html` - Added agreementType state, type selector UI, NDCA form with 5 fields, buildBilateralSections() function, dynamic review/signature rendering

## Decisions Made
- Combined Tasks 1 and 2 into a single commit since both modify the same step 0 rendering block in the single-file architecture
- Used useEffect for free-user auto-set rather than inline conditional to avoid rendering the selector for even one frame
- buildBilateralSections returns identical {t, b} array format to buildSections for full pipeline compatibility

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

| Stub | File | Line | Reason |
|------|------|------|--------|
| NDCA legal text placeholder | index.html | review step (step 1) | Intentional per D-07. NDCA legal text deferred to Plan 03 (final wave) pending state enforceability research data. |

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Type selector and NDCA form ready for Plan 02 (type flow through full pipeline: sign, verify, complete)
- Bilateral NDA fully functional through review; needs Plan 02 for type propagation to Firestore
- NDCA legal text blocked on research data; will be addressed in Plan 03 (final wave)

---
*Phase: 03-ndc-bilateral-nda-templates*
*Completed: 2026-04-15*

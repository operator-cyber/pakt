---
phase: 03-ndc-bilateral-nda-templates
plan: "03"
subsystem: legal-engine
tags: [react, ndca, non-compete, legal-templates, state-data, enforceability]

# Dependency graph
requires:
  - phase: 03-ndc-bilateral-nda-templates
    plan: "01"
    provides: agreementType state, NDCA form UI, type selector
  - phase: 03-ndc-bilateral-nda-templates
    plan: "02"
    provides: type-aware canvas PNG generation, Firestore type field, pipeline wiring
provides:
  - NDCA_STATE_DATA object with per-state non-compete rules (51 entries)
  - buildNdcaSections() legal text generator with 8 sections
  - getNdcaComplianceItems() state-specific compliance checklist
  - Enforceability warning banner for ban states (CA, MN, ND, OK)
  - Real NDCA legal text on review screen and canvas PNGs
affects: [04-remote-signing]

# Tech tracking
tech-stack:
  added: []
  patterns: [state-aware legal text generation, conditional enforceability warnings, blue pencil doctrine routing]

key-files:
  created: []
  modified: [index.html]

key-decisions:
  - "Used Claude research report as primary source for all 51 jurisdictions per D-13"
  - "Blue pencil doctrine drives severability clause language (reformation vs strict_void vs hybrid)"
  - "Ban states show warning but do not block NDCA creation per D-15"
  - "NDCA duration warning only shown when selected period exceeds state max"

patterns-established:
  - "NDCA_STATE_DATA mirrors STATE_DATA pattern but with non-compete-specific fields (banned, maxDuration, minCompensation, bluePencil)"
  - "buildNdcaSections follows same {t, b} array pattern as buildSections and buildBilateralSections"
  - "getNdcaComplianceItems follows same {ok, label, detail} pattern as getComplianceItems"

requirements-completed: [TMPL-01, TMPL-03]

# Metrics
duration: 3min
completed: 2026-04-15
---

# Phase 03 Plan 03: NDCA Legal Text Engine with 50-State Enforceability Data Summary

**NDCA_STATE_DATA with per-state non-compete rules for 51 jurisdictions, buildNdcaSections generating 8 legal text sections with blue-pencil-aware severability, and enforceability warning banners for ban states**

## Performance

- **Duration:** 3 min
- **Started:** 2026-04-15T06:10:58Z
- **Completed:** 2026-04-15T06:14:18Z
- **Tasks:** 1 of 2 (Task 2 is human-verify checkpoint)
- **Files modified:** 1

## Accomplishments
- NDCA_STATE_DATA object populated with per-state non-compete rules for all 50 states + DC, sourced from Claude research report (primary per D-13)
- Four ban states identified: California (B&P Code 16600), Minnesota (Minn. Stat. 181.988), North Dakota (N.D.C.C. 9-08-06), Oklahoma (15 O.S. 219A)
- buildNdcaSections() generates 8 legal text sections: Restricted Activities, Geographic Scope, Time Period, Consideration, Severability, Remedies, Governing Law, Entire Agreement
- Severability clause adapts based on blue pencil doctrine: reformation (courts may reform), strict_void (overbroad voids entire restriction), or hybrid (court discretion)
- Time Period section warns when selected duration exceeds state maximum (e.g., selecting 2 years in a 1-year-max state)
- Consideration section notes state minimum compensation thresholds (e.g., IL $75,000/year, WA $116,593/year)
- getNdcaComplianceItems() returns state-specific checklist covering enforceability status, duration limits, compensation thresholds, blue pencil doctrine, and statutory framework
- Enforceability warning banner shown for ban states (red, prominent, does not block creation per D-15)
- NDCA review screen now shows full legal text with real intro paragraph (placeholder removed)
- Canvas PNG intro text updated in both generateImage and regenerateWithBio to match real NDCA language

## Task Commits

1. **Task 1: Create NDCA_STATE_DATA and buildNdcaSections with enforceability warnings** - `7914db9` (feat)

## Files Created/Modified
- `index.html` - Added NDCA_STATE_DATA (51 entries), buildNdcaSections(), getNdcaComplianceItems(), enforceability warning banner, updated sections/compliance useMemo routing, replaced placeholder text, updated canvas intro text

## Decisions Made
- Used Claude research report as the exclusive primary source for all state data (D-13); Gemini report was available for cross-reference but not needed as Claude report contained complete parseable JSON for all 51 jurisdictions
- Blue pencil doctrine field drives the severability section language, providing legally accurate clause variations per state
- Ban states (CA, MN, ND, OK) show a prominent red warning banner but do not prevent document creation per D-15
- Duration warnings are only shown when the user's selected time period exceeds the state's statutory maximum, avoiding false warnings for states without caps

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

None - all NDCA placeholder text has been replaced with real legal content.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All three agreement types (Unilateral NDA, Bilateral NDA, NDCA) are fully functional with real legal text
- Phase 03 is functionally complete pending human verification (Task 2 checkpoint)
- Ready for Phase 04 (Remote Signing) once verified

---
*Phase: 03-ndc-bilateral-nda-templates*
*Completed: 2026-04-15*

## Self-Check: PASSED

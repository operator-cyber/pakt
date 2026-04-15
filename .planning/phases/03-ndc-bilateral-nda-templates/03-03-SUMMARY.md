---
phase: 03-ndc-bilateral-nda-templates
plan: "03"
subsystem: legal-engine
tags: [react, ndca, non-compete, state-data, legal-templates, enforceability]

# Dependency graph
requires:
  - phase: 03-ndc-bilateral-nda-templates
    plan: "02"
    provides: agreementType wired through full pipeline, canvas generation, Firestore upload
provides:
  - NDCA_STATE_DATA with per-state non-compete rules (50 states + DC)
  - buildNdcaSections() legal text generator using form data
  - getNdcaComplianceItems() compliance checklist for NDCA review
  - Enforceability warning banner for ban states
affects: [04-remote-signing, 05-subscription-tier]

# Tech tracking
tech-stack:
  added: []
  patterns: [state-aware legal text generation, ban state warning UI, compliance checklist pattern]

key-files:
  created: []
  modified: [index.html]

key-decisions:
  - "NDCA_STATE_DATA structure: banned, maxDuration, minCompensation, bluePencil, statute, notes per state"
  - "Ban states identified from research: CA, MN, ND, OK, MT (WA transitioning to ban by June 2027)"
  - "Blue pencil doctrine drives severability clause language (reformation vs strict severance)"
  - "Duration warnings when selected period exceeds state maxDuration"
  - "Compensation threshold warnings for states with income floors"
---

# Plan 03-03 Summary: NDCA Legal Text Engine

## What Shipped

### NDCA_STATE_DATA (50 States + DC)
Per-state non-compete enforceability data derived from the Claude research report ("US Non-Compete Law Analysis"). Each state entry contains:
- `banned`: boolean (CA, MN, ND, OK, MT are true)
- `maxDuration`: state-imposed cap (e.g., "2 years" for AL, "12 months" for MA/OR, "1 year" for UT/DC)
- `minCompensation`: income threshold (e.g., "$130,014" for CO, "$75,000" for IL, "$162,164" for DC)
- `bluePencil`: whether courts will reform overbroad agreements
- `statute`: primary statute reference
- `notes`: state-specific rules and recent changes

### buildNdcaSections(state, formData)
Generates 8 legal sections from form data:
1. Restricted Activities (uses formData.restrictedActivities)
2. Geographic Scope (uses formData.geographicScope)
3. Time Period (with state maxDuration warnings)
4. Consideration (with state minCompensation warnings)
5. Severability (blue pencil vs strict severance based on state)
6. Remedies (equitable relief, attorney fees)
7. Governing Law and Jurisdiction
8. Entire Agreement and Amendments

### getNdcaComplianceItems(state)
Review checklist showing:
- Enforceability status (banned/restricted/enforceable)
- Maximum duration limit
- Compensation threshold
- Blue pencil doctrine status
- Governing statute or standard

### Enforceability Warning Banner
Red warning banner on NDCA review screen when state has `banned: true`. Shows state name, statute reference, and advisory to consult attorney. Does NOT block creation per D-15.

### Canvas and Review Updates
- Removed all "placeholder" / "pending research data" text
- NDCA intro text in generateImage and regenerateWithBio updated to real legal language
- sections useMemo now calls buildNdcaSections(form.state, form) for NDCA type
- compliance useMemo now calls getNdcaComplianceItems(form.state) for NDCA type

## Human Verification Pending
Task 2 (checkpoint:human-verify) requires manual testing of all three agreement types end-to-end. See plan for full test script.

## Commits
- `27decd9`: feat(03-03): add NDCA legal text engine with 50-state enforceability data

## Verification Status
- [x] NDCA_STATE_DATA has entries for all 50 states + DC
- [x] Ban states (CA, MN, ND, OK, MT) have `banned: true`
- [x] buildNdcaSections returns {t, b} array format
- [x] getNdcaComplianceItems returns compliance items
- [x] Enforceability warning renders for ban states
- [x] No placeholder text remaining
- [ ] Human verification of full end-to-end flow (pending)

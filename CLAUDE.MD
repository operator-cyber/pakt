# Pakt NDA App

On startup, read project context from /Users/borisrodriguez/Documents/Obsidian Vault/projects/nda-app/CLAUDE.md for accumulated knowledge, decisions, open questions, and recent session history.

Mobile-first mutual NDA generator, signer, and vault. Single-file React PWA (index.html, ~1650 lines). Next phase: Capacitor wrap for iOS App Store.

## Architecture

- **Single HTML file** (index.html) with inline JSX transpiled by Babel in browser
- **React 18** loaded from CDN (unpkg.com) — must be bundled locally for Capacitor wrap
- **Firebase Realtime Database** for biometric verification handshake only (project: pakt-76a51)
- **IndexedDB** ("PaktVault") for local NDA storage
- **Service Worker** (sw.js, cache version v14) for offline/PWA capability
- **No build system** — runs via python3 -m http.server 8080
- **GitHub repo:** github.com/operator-cyber/pakt (branch: remote-signing)
- **GitHub Pages:** operator-cyber.github.io/pakt/ (serves from main branch)

## Components

| Component | Purpose |
|-----------|---------|
| App | Router. Checks for ?verify= param (routes to VerifyScreen). Otherwise renders tab bar + NDA or Vault view |
| NDA | Main 5-step flow (Details > Review > Sign > Verify > Complete). Contains all NDA logic |
| Vault | Library of saved NDAs with detail view, delete with confirmation |
| VerifyScreen | Party B's biometric verification page (opened via QR code scan) |
| SignatureCanvas | Reusable finger-drawn signature pad with clear button |

## App Flow (5 Steps)

### Step 0: Details
- Fields: Your Name, Their Name, What Are You Protecting (7 categories + custom), What Are You Sharing (purpose), Your State (50 states + DC dropdown), Start Date
- Categories: Trade Secrets, Source Code, Strategy, Financial, Customer/Vendor, Designs, Personnel
- "Review Agreement" button (disabled until all required fields filled)
- Logo at top (pakt-logo.png)

### Step 1: Review
- State-specific compliance checklist (expandable, shows UTSA status, bond waiver, workplace disclosure, fee-shifting, etc.)
- State notes panel (expandable, shows state-specific legal notes)
- Full rendered NDA text with 8+ sections dynamically generated based on jurisdiction
- **Privacy Policy link** (opens in-app privacy policy view, not external URL)
- Back and Sign buttons
- Swipe-back gesture to return to Details

### Step 2: Sign
- Video recording toggle (on by default, front camera, stored locally only)
- Live camera preview with REC indicator, corner brackets, "Witness Recording" label
- Two SignatureCanvas pads (Disclosing Party + Receiving Party)
- "Complete" button (disabled until both signatures drawn)
- Back button (discards video)
- Swipe-back gesture
- Video error handling (permission denied, no camera, not supported)

### Step 3: Verify (Biometric)
- Auto-generates QR code linking to ?verify=SESSION_ID
- Firebase session created with party names, purpose, timestamp
- Real-time listener for verification status
- Shows QR code with animated pulse, "Waiting for [name]..." status
- "Skip Verification" button
- On verified: shows green checkmark, attestation timestamp, "View Agreement" button
- Firebase session deleted after verification completes, is skipped, or app closes (beforeunload handler)

### Step 4: Complete
- "Agreement Signed" + "Saved to Vault" badge
- Signed NDA image (canvas-rendered PNG with full legal text, signatures, optional bio stamp)
- Video playback + **"Save Recording" download button** (if recorded)
- Biometric verification card (method, credential ID) if verified
- Verification receipt image (full cryptographic audit trail PNG) if verified
- Agreement summary table (Parties, Purpose, Type, Duration, Governing Law, Sections, Date, Verification methods)
- "+ New NDA" button (resets everything, cleans up Firebase)

### Privacy Policy View
- In-app privacy policy (not external URL) accessible from Review step
- Covers: data collection, local storage, Firebase transmission details, camera access, WebAuthn biometrics, third parties (Firebase + Google Fonts), data retention, deletion, children's privacy, CCPA, governing law (California)
- Standalone HTML version also at privacy.html for GitHub Pages (App Store Connect URL)
- Contact: operator@classofnone.com, Class of NONE LLC, Los Angeles CA

## Vault

### List View
- Shows all saved NDAs sorted by date (newest first)
- Each card: party names, purpose, date, biometric verified icon
- "Create Your First NDA" button when empty
- Vault logo at top (vault-logo.png)

### Detail View
- Back to Vault button + swipe-back gesture
- Summary card: Type, Duration, Governing Law, Verification methods
- Signed NDA image (long-press to save/share)
- Witness recording video player (if captured)
- Verification receipt image (long-press to save/share)
- **Send button + Download All Files button** (per NDA)
- Delete NDA button with confirmation dialog
- All data stored in IndexedDB, fully local

## Tab Bar
- Fixed bottom nav with HOME and VAULT tabs
- Tapping HOME resets the NDA flow
- Safe area padding for notched devices

## Legal Compliance Engine

### 50-State Jurisdiction System
- 3-tier classification:
  - **Tier 1** (strictest): California, Hawaii, Illinois, Oregon, Washington — mandatory verbatim workplace disclosure language
  - **Tier 2** (moderate): Colorado, Connecticut, Maine, Maryland, Massachusetts, Nevada, New Jersey, New Mexico, New York, Vermont — state-specific disclosure provisions
  - **Tier 3** (standard): All other states — best-practice government reporting language
- Per-state data: UTSA adoption, bond waiver enforceability, applicable statutes, specific legal notes
- Dynamic NDA sections generated based on selected state

### NDA Sections (dynamically generated)
1. Confidential Information (based on selected categories + custom)
2. Obligations of Receiving Party
3. Exclusions from Confidential Information
4. Term and Survival (2 years + 3 year survival)
5. Return/Destruction of Materials
6. Remedies (bond waiver language varies by state enforceability)
7. Governing Law
8. Entire Agreement
9. Permitted Disclosures (tier-based workplace disclosure with state-specific statute references)
10. Federal Whistleblower Notice (DTSA 18 U.S.C. 1833(b))
11. General Skills Carve-Out

### Compliance Checklist (Review step)
- UTSA or Common Law trade secret protection status
- Federal Whistleblower Notice (DTSA)
- Workplace Disclosure (with specific statute reference)
- Bond Waiver enforceability
- Fee-Shifting Clause
- General Skills Carve-Out

## Firebase Usage
- **Only used for biometric verification handshake** (not for NDA storage)
- Writes: party names, purpose, timestamp, session status
- Party B writes back: credential ID, authenticator type, user agent
- **All session data is deleted via .remove()** after verification completes, is skipped, user hits New NDA, or tab/app closes
- beforeunload handler catches abandoned sessions
- Firebase project: pakt-76a51

## Canvas-Rendered PNG Output
- High-resolution (3x scale, 650px base width)
- Full NDA text rendered as image (not PDF — PDFs fail in iOS webview)
- Signatures drawn from saved canvas data
- Optional biometric verification stamp section
- "Long-press this image to save or share" text at bottom
- Separate verification receipt PNG with full audit trail

## Key Technical Decisions (locked)
- Signatures use native addEventListener, NOT React synthetic events (fixes iOS touch jiggle)
- Output is canvas-rendered PNG, NOT PDF (PDFs silently fail in iOS webview)
- touch-action: none on canvas elements
- window.scrollTo(0,0) on every step change
- Video uses MediaRecorder API with getUserMedia (front camera)
- getSupportedMimeType() for cross-browser video codec support
- QR codes generated client-side via qrcode-generator library
- Swipe-back gestures on Review and Sign steps (80px threshold, must be more horizontal than vertical)

## Design
- **Colors:** Firmament #0a0f23 (primary dark), Autumn #fae4cf (primary light)
- **Fonts:** Instrument Serif (headings/body), Outfit (UI/labels), Google Fonts loaded via CDN
- **Animated grain overlay** on #root (SVG turbulence filter, 8s animation)
- **Verification green:** #2B4230
- **Error red:** #c0392b
- **App icons:** 180x180, 192x192, 512x512 (in project root)

## Files
| File | Purpose |
|------|---------|
| index.html | Entire app (React components, styles, Firebase config, legal engine) |
| privacy.html | Standalone privacy policy for GitHub Pages / App Store Connect URL |
| sw.js | Service worker, cache v14 |
| manifest.json | PWA manifest |
| pakt-logo.png | Home screen logo |
| vault-logo.png | Vault screen logo |
| apple-touch-icon.png | iOS home screen icon (180x180) |
| app-icon-192x192.png | Android/PWA icon |
| app-icon-512x512.png | Large icon |
| Assets/privacy-policy-url.txt | GitHub Pages URL for App Store Connect |

## Apple App Store Audit Status (April 2026)
Audit performed against full Apple App Review Guidelines (Feb 2026 version).

### Completed
- [x] Privacy policy (in-app + hosted at operator-cyber.github.io/pakt/privacy.html)
- [x] Firebase data deletion (all paths now use .remove(), beforeunload cleanup)
- [x] Scroll-to-top on step transitions

### Remaining Before Submission
- [ ] Legal disclaimer ("not legal advice" notice)
- [ ] Firebase security rules (lock down database)
- [ ] Support URL for App Store Connect
- [ ] Bundle JS dependencies locally (Capacitor phase)
- [ ] Capacitor project setup + native splash screen + status bar
- [ ] App Store screenshots (all 5 steps)
- [ ] App Review notes for Apple (detailed feature walkthrough)
- [ ] Age rating (4+) and category (Business or Productivity)

## Reference
See Context/ folder for: 50 State Nuances, App Store Monetization Research, Pricing Strategy Research, PAKT Brain Dump Expansion.

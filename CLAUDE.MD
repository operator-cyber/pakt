# NDA App (Pakt)

On startup, read project context from /Users/borisrodriguez/Documents/Obsidian Vault/projects/nda-app/CLAUDE.md for accumulated knowledge, decisions, open questions, and recent session history.

Mobile-first NDA signer. MVP complete as React artifact (nda-signer-v2.2.jsx). 4-step flow: Details > Review > Sign > Done. Finger-drawn signatures, canvas-rendered PNG output, 50-state compliance, biometric verification. Next: standalone PWA conversion + Capacitor for App Store.

## Key Technical Decisions (locked, solved through trial and error)
- Signatures use native addEventListener in useEffect, NOT React synthetic events (fixes iOS artifact sheet jiggle)
- Output is canvas-rendered PNG image, NOT PDF (PDFs silently fail in Claude's sandboxed webview on iOS)
- Body scroll locked during sign step via overflow: hidden on body/html
- touch-action: none on canvas and parent elements
- Google Font "Anton" for title, Georgia serif for body
- Colors: Firmament #0a0f23 + Autumn #fae4cf
- Long-press image save, not download button

## NDA Content
Mutual NDA with 8 sections: Confidential Info, Obligations, Exclusions, Term (2 years), Return of Materials, Remedies, Governing Law, Entire Agreement. Purpose field scopes the agreement.

## Reference
See Context/ folder for: 50 State Nuances, App Store Monetization Research, Pricing Strategy Research, Enforceable NDA Research, Target Market Analysis.

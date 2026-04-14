# Phase 02: Firestore Schema + Cloud Storage — Context

## Phase Boundary

**In scope:** Create Firestore database, define collections/schema, write security rules, upload NDA artifacts to Cloud Storage, add usage counting for free tier limits, connect existing vault to cloud.

**Out of scope:** Remote signing (Phase 4), subscription/paywall (Phase 5), new templates (Phase 3), account screen UI beyond usage counter.

## Current State (from Phase 1)

- Firebase project: pakt-76a51
- Firebase Auth working (Google Sign-In verified, Apple ready for real device)
- Firestore database NOT YET CREATED in Firebase Console
- Realtime Database in use for biometric verification sessions only
- writeUserProfile() exists in code but silently fails (no Firestore DB)
- NDAs stored locally in IndexedDB "PaktVault" (version 1, "ndas" store)
- NDA images stored as base64 data URLs in IndexedDB (can be huge)
- Video stored as blob URLs in IndexedDB (non-persistent, lost on app restart)
- 3-tab nav: HOME, VAULT, ACCOUNT

## Current NDA Record Schema (IndexedDB)

```javascript
{
  id: string,              // 24-char alphanumeric
  party1: string,          // Disclosing Party name
  party2: string,          // Receiving Party name
  purpose: string,         // What are you protecting
  state: string,           // US state
  date: string,            // ISO date YYYY-MM-DD
  categories: string[],    // Selected categories
  ndaImage: string,        // base64 PNG data URL (large, ~500KB-2MB)
  receiptImage: string,    // base64 PNG data URL or null
  videoURL: string,        // blob URL (non-persistent) or null
  bioVerified: boolean,    // biometric verification done
  bioResult: object|null,  // {verifiedAt, credentialId, authenticatorType, userAgent}
  verification: string,    // "Video + Signature + Biometric"
  createdAt: number        // Date.now() milliseconds
}
```

## Key Design Decisions Needed

- D-01: Keep IndexedDB as local cache or replace entirely with Firestore?
- D-02: Upload NDA images to Cloud Storage or keep base64 in Firestore docs?
- D-03: How to handle video storage (currently broken — blob URLs don't persist)?
- D-04: Subcollection (users/{uid}/ndas/{id}) vs top-level collection with uid field?
- D-05: Usage counting approach — query createdAt or maintain a counter?
- D-06: When to upload — on NDA completion or lazy background sync?
- D-07: Firestore rules granularity — per-field or per-document?

## Implementation Decisions

- D-01: **Dual storage.** Keep IndexedDB for offline capability (the app works offline for creation). Sync to Firestore on completion when online. Firestore is source of truth for "My NDAs" list.
- D-02: **Cloud Storage for images/video.** Base64 in Firestore docs would hit the 1MB document limit. Store paths in Firestore, blobs in Cloud Storage at `users/{uid}/ndas/{ndaId}/nda.png`, `receipt.png`, `video.mp4`.
- D-03: **Convert video blob to File, upload to Cloud Storage.** Fix the current broken blob URL storage. Video persists in cloud, not IndexedDB.
- D-04: **Subcollection.** `users/{uid}/ndas/{ndaId}` — natural security boundary, simple rules, queries scoped to user automatically.
- D-05: **Query createdAt.** Count NDAs where `createdAt >= firstOfMonth`. No stored counter to get out of sync. Per LIMIT-02.
- D-06: **Upload on completion.** When the NDA is "saved to vault" (step 4 complete), also upload to Firestore + Cloud Storage. Show upload progress indicator.
- D-07: **Per-document rules.** Users can only read/write docs where the path contains their UID. Tier field in user doc is read-only from client (server-managed in Phase 5).

## Requirements Covered

| Req | Description | Plan |
|-----|-------------|------|
| CLOUD-01 | Firestore users/{uid} with profile fields | 02-01 |
| CLOUD-02 | Firestore users/{uid}/ndas/{ndaId} subcollection | 02-01 |
| CLOUD-03 | Cloud Storage for signatures, videos, NDA images | 02-02 |
| CLOUD-04 | Security rules enforce user-scoped access | 02-01 |
| CLOUD-05 | "My NDAs" screen with status indicators | 02-03 |
| CLOUD-06 | NDA PNG uploads on completion | 02-02 |
| LIMIT-01 | Free tier: 2 NDAs per month | 02-03 |
| LIMIT-02 | Usage counted by createdAt query | 02-03 |
| LIMIT-03 | Counter resets monthly | 02-03 |
| LIMIT-04 | Upgrade prompt at limit | 02-03 |
| LIMIT-05 | Pro tier unlimited | 02-03 |

## Proposed Plan Breakdown

- **02-01**: Create Firestore database, define schema, write security rules (Firebase Console + code)
- **02-02**: Cloud Storage upload on NDA completion (images + video)
- **02-03**: Usage counting, limit enforcement, upgrade prompt in ACCOUNT tab

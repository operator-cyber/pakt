---
phase: 02-firestore-schema
plan: "02"
subsystem: backend
tags: [cloud-storage, firestore, nda-upload, dual-storage]
dependency_graph:
  requires: [02-01]
  provides: [cloud-nda-upload, firestore-nda-docs, video-blob-capture]
  affects: [index.html, sw.js]
tech_stack:
  added:
    - Firebase Storage compat SDK v12.12.0 (lib/firebase-storage-compat.js)
  patterns:
    - Dual storage: IndexedDB first (instant), Cloud Storage in background
    - dataURLtoBlob converts base64 data URLs to Blob for upload
    - videoBlobRef captures raw MediaRecorder blob for cloud upload
    - Cloud Storage path: users/{uid}/ndas/{ndaId}/{file}
key_files:
  created:
    - lib/firebase-storage-compat.js
  modified:
    - index.html (uploadNdaToCloud, dataURLtoBlob, videoBlobRef, saveToVault dual-storage)
    - sw.js (pakt-v18, firebase-storage-compat.js added to SHELL)
decisions:
  - "Cloud upload runs after local save — failure doesn't block vault save"
  - "No upload progress indicator in this phase — user sees 'Saved to Vault' immediately"
  - "Video blob captured via useRef (videoBlobRef) alongside existing blob URL creation"
  - "Service worker bumped to pakt-v18"
metrics:
  completed_date: "2026-04-14"
  tasks_completed: 3
  tasks_total: 3
---

# Phase 02 Plan 02: Cloud Storage Upload Summary

Firebase Storage SDK bundled. NDA completion now uploads artifacts to Cloud Storage and creates Firestore NDA documents. Local IndexedDB vault save continues to work (dual storage).

## Tasks Completed

| Task | Name | Status |
|------|------|--------|
| 1 | Download Firebase Storage SDK, add to index.html and sw.js | Done |
| 2 | Implement uploadNdaToCloud and modify saveToVault | Done |
| 3 | Verify cloud upload on iOS simulator | Done |

## What Was Built

Functions added to index.html:
- `dataURLtoBlob(dataURL)` — converts base64 data URLs to Blob for upload
- `uploadNdaToCloud(ndaId, record, videoBlob)` — uploads NDA PNG, receipt PNG, video to Cloud Storage + writes Firestore NDA doc
- `videoBlobRef` — useRef capturing raw video blob from MediaRecorder for cloud upload

saveToVault modified for dual storage:
1. Save to IndexedDB first (instant, offline-capable)
2. Upload to Cloud Storage + write Firestore doc (background, failure-tolerant)
3. Clear videoBlobRef after upload

Cloud Storage file structure:
```
users/{uid}/ndas/{ndaId}/nda.png
users/{uid}/ndas/{ndaId}/receipt.png   (if biometric verified)
users/{uid}/ndas/{ndaId}/video.mp4     (if video recorded)
```

Firestore NDA document (users/{uid}/ndas/{ndaId}):
- party1, party2, purpose, state, date, categories
- type: "nda", status: "complete"
- ndaImagePath, receiptImagePath, videoPath (Cloud Storage paths)
- bioVerified, bioResult, verification
- createdAt (server timestamp)

## Verification

- Firebase Console > Storage shows users/{uid}/ndas/ folders with nda.png files
- NDA still appears in local Vault tab (dual storage confirmed)
- Service worker at pakt-v18 caching firebase-storage-compat.js

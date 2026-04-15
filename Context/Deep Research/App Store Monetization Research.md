# Pakt NDA App: App Store Monetization Research
**Research Date:** March 29, 2026

---

## The Competition (NDA-Specific Apps)

Only 3 real NDA apps exist on the App Store. The market is barely served.

| App | Price | Rating | Reviews | Key Weakness |
|-----|-------|--------|---------|--------------|
| **GiveMeThatNDA** | Free | None | 0 | No verification, no state compliance, zero market validation |
| **NDA Blue** | Free + $19-25 per NDA (IAP) | 3.0 stars | 3 | Explicitly states it "does not authenticate signatures." Users confused by face scan feature. |
| **Celebrity NDA** | Free + $50-1000 subscriptions | 4.7 stars | 13 | Hidden/aggressive pricing. No state compliance. Video recording only on premium tiers. |
| **YourNDA** | $1-2 per document | Dead | 0 | Appears abandoned (launched 2020, 0 Product Hunt reviews) |

**General e-signature competitors (not NDA-specific):**

| App | Model | Price |
|-----|-------|-------|
| DocuSign | Subscription (freemium) | Free (3/mo) then $10-65/mo |
| SignEasy | Subscription (freemium) | Free trial then $15-25/mo |
| Dropbox Sign | Subscription (freemium) | Free (3/mo) then $10-25/mo |
| Adobe Sign | Subscription | $13-30/mo |
| Notarize | Pay-per-use | $25/transaction |

### What Pakt Has That Nobody Else Does

- 50-state legal compliance engine (tier 1/2/3 system with state-specific NDA language)
- Real biometric verification via WebAuthn/FIDO2 (cross-device QR code flow)
- Video recording of signing process (included by default, not paywalled)
- State-specific workplace disclosure sections (California SB 331, Washington Silenced No More Act, etc.)
- Federal Whistleblower Immunity Notice (DTSA)
- Dynamic remedies sections based on state bond waiver enforceability
- Confidential information category selector with legal language per category
- Local vault with IndexedDB storage
- Offline-capable PWA architecture

---

## App Store Landscape (2026)

### Apple's Commission
- **30% standard** on all transactions
- **15% for Small Business Program** (developers earning under $1M/year) — applies to Pakt
- US developers can link to external payment methods at **0% commission** (Epic v Apple ruling, enforced 2025)

### Costs
- **$99/year** Apple Developer Program — the only required cost
- App Store review: **24-48 hours** typically

### Key Stats
- 94.6% of App Store apps are free (freemium model dominates)
- 96% of App Store spending comes from subscriptions
- Hard paywall apps convert at **6x the rate** of freemium (10.7% vs 2.1%)
- Free trials requiring credit card upfront see **30% conversion**

---

## Revenue Projections (Year 1, Realistic)

Based on niche legal utility app benchmarks. These are conservative — Pakt is not a mass-market app.

### Model A: Paid App at $4.99

| Metric | Value |
|--------|-------|
| App Store impressions (organic ASO) | ~50,000 |
| Impression-to-install rate (paid app) | 2.5% |
| Year 1 downloads | ~1,250 |
| Revenue per download (after 15% Apple cut) | $4.24 |
| **Year 1 Revenue** | **~$5,300** |

- Zero additional development needed
- Highest revenue per user
- No churn risk
- Limited viral/marketing potential (paid barrier)

### Model B: Freemium + $9.99 Lifetime Unlock

| Metric | Value |
|--------|-------|
| App Store impressions | ~150,000 (free apps get 3x visibility) |
| Free downloads | ~5,400 |
| Freemium-to-paid conversion | 4% |
| Paid conversions | ~216 |
| Revenue per conversion (after 15% cut) | $8.49 |
| **Year 1 Revenue** | **~$1,800** |

- Gets 4x more downloads than paid
- But low conversion rate for utility apps people use a few times a year
- No recurring revenue
- Better for marketing/awareness

### Model C: Freemium + $4.99/month Subscription

| Metric | Value |
|--------|-------|
| Free downloads | ~5,400 |
| Subscription conversion | 2.5% |
| Initial subscribers | ~135 |
| Monthly churn | 8% |
| Revenue per subscriber/month (after 30% Apple cut Year 1) | $3.49 |
| **Year 1 Revenue** | **~$3,100** |

- Highest long-term potential if churn controlled
- But freelancers have "unpredictable signing needs" — subscription is a bad fit for this demographic
- 83% of subscribers churn within 12 months for utility apps

### Summary Table

| Model | Downloads | Year 1 Revenue | Dev Work Needed |
|-------|-----------|----------------|-----------------|
| Paid $4.99 | ~1,250 | **$5,300** | None (just wrap with Capacitor) |
| Freemium + $9.99 unlock | ~5,400 free / 216 convert | **$1,800** | Usage counter + paywall + StoreKit |
| Subscription $4.99/mo | ~5,400 free / 135 subscribe | **$3,100** | Usage counter + paywall + StoreKit + subscription management |

### With Marketing Effort
- Good ASO + organic/influencer: **$4K-$8K Year 1**
- Strong marketing + hybrid model: **$10K-$15K Year 1 (optimistic)**

---

## The Pricing Question

Pakt may be underpriced at $4.99. Competitors charge:
- NDA Blue: $19-25 per individual NDA
- Celebrity NDA: $50-1000 for subscriptions
- DocuSign: $10-65/month

Pakt offers more than all of them (state compliance, real biometric auth, video). A $9.99-$14.99 price point for a paid app or lifetime unlock is defensible.

---

## Recommended Approach: Phased Launch

### Phase 1 — Ship as Paid App ($4.99-$9.99)
- Zero extra development needed
- Wrap PWA with Capacitor, set price in App Store Connect, submit
- Proves demand, generates immediate revenue
- Timeline: 1-2 work sessions + 24-48 hour review

### Phase 2 — Add Freemium (Month 6-9)
- Switch to free download with 2-3 free NDAs
- Add $9.99 lifetime unlock or $4.99/month subscription
- Requires building: usage counter, paywall screen, StoreKit 2 integration
- Decision based on actual user data from Phase 1

---

## Technical Path: PWA to App Store

**Cannot submit PWA directly.** Apple rejects them under Guideline 4.2.

### Capacitor (Recommended)
- Wraps existing React code in native iOS container
- Full compatibility with current tech stack (React, Firebase, IndexedDB, WebAuthn, camera)
- StoreKit 2 accessible via plugins (RevenueCat or native purchases plugin)
- Pakt already has native-feeling features (tab bar, camera, biometrics, offline) — should pass review
- Timeline: 2-5 hours to wrap

### What Capacitor Needs
- Node.js 18+
- Xcode (Mac only)
- Apple Developer account ($99/year)
- `npm install @capacitor/core @capacitor/cli` then `npx cap add ios`

### Compatibility Check

| Pakt Feature | Capacitor Support |
|---|---|
| React SPA | Full support |
| Firebase Realtime DB | Works directly |
| IndexedDB (Vault) | Works but iOS can clear aggressively — consider secure storage backup |
| WebAuthn/FIDO2 | Works (iOS 13.3+) |
| Camera/Media APIs | Works via Capacitor camera plugin |
| Service Worker | Full support |

---

## Marketing Strategy (When Ready)

### $0 Budget (Months 1-3)
- ASO: keyword optimization ("NDA," "non-disclosure agreement," "contract signer," "freelancer agreement")
- Strong screenshots showing the signing flow and state compliance
- Indie Hacker community posts
- Reddit: r/freelance, r/smallbusiness, r/legaladvice

### $2K-$5K Budget (Months 4-6)
- Product Hunt launch (free visibility)
- Micro-influencer outreach in freelancer/creator space (~$50-100 per creator)
- Targeted Reddit/Twitter ads

### Key Insight
Paid acquisition costs $1-3 per install for productivity apps. At $4.99 revenue ($4.24 after Apple), margins are thin on ads. **Organic/influencer growth is essential**, similar to Cal AI's approach.

---

## Sources

- Apple App Store Business Models: developer.apple.com/app-store/business-models/
- Apple Small Business Program: developer.apple.com/app-store/small-business-program/
- StoreKit 2 Documentation: developer.apple.com/storekit/
- RevenueCat State of Subscription Apps 2026
- Adapty State of In-App Subscriptions 2026
- Business of Apps: App Store Conversion Rates 2026
- Epic v Apple Anti-Steering Ruling (Ninth Circuit, 2025)
- Capacitor iOS Deployment: capacitorjs.com/docs/ios/deploying-to-app-store
- GiveMeThatNDA: apps.apple.com/us/app/givemethatnda/id6754503994
- NDA Blue: apps.apple.com/us/app/nda-blue/id1472676721
- Celebrity NDA: apps.apple.com/us/app/celebrity-nda/id1586841675

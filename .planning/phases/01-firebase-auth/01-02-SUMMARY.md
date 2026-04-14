---
phase: 01-firebase-auth
plan: "02"
subsystem: infrastructure
tags: [capacitor, ios, firebase-auth, google-signin, apple-signin, spm]
dependency_graph:
  requires: ["01-01"]
  provides: [capacitor-ios-project, firebase-auth-plugin, oauth-url-schemes, sign-in-with-apple]
  affects: [ios/, package.json, capacitor.config.json]
tech_stack:
  added:
    - "@capacitor/core 8.3.0"
    - "@capacitor/ios 8.3.0"
    - "@capacitor/cli 8.3.0 (dev)"
    - "@capacitor-firebase/authentication 8.2.0"
    - "@capacitor/status-bar 8.0.2"
    - "@capacitor/splash-screen 8.0.1"
    - "@capacitor/haptics 8.0.2"
  patterns:
    - "www/ build directory (web assets copied before cap sync)"
    - "npm run build:web copies index.html, sw.js, lib/, images to www/"
    - "npm run cap:sync chains build:web + cap sync"
    - "Swift Package Manager for native plugin resolution (Capacitor 8 default, no CocoaPods)"
key_files:
  created:
    - package.json
    - package-lock.json
    - capacitor.config.json
    - .capacitorignore
    - ios/App/App/App.entitlements
    - www/ (build output directory)
  modified:
    - ios/App/App/Info.plist (added CFBundleURLSchemes with REVERSED_CLIENT_ID)
    - ios/App/App.xcodeproj/project.pbxproj (IPHONEOS_DEPLOYMENT_TARGET = 16.0)
    - ios/App/App/GoogleService-Info.plist (updated with CLIENT_ID and REVERSED_CLIENT_ID)
decisions:
  - "webDir set to 'www' not '.' — Capacitor 8 rejects '.' as invalid. Added npm build:web script to copy assets."
  - "Swift Package Manager used instead of CocoaPods — Capacitor 8 default, no Podfile/xcworkspace generated."
  - "SplashScreen launchAutoHide: false — masks Babel parse delay in WKWebView (1-4 seconds)."
  - "Deployment target set to iOS 16.0 per D-05."
metrics:
  completed_date: "2026-04-13"
  tasks_completed: 3
  tasks_total: 3
  files_created: 6
  files_modified: 3
---

# Phase 01 Plan 02: Initialize Capacitor and Firebase Auth Plugin Summary

Capacitor iOS project initialized at com.classofnone.pakt with Firebase Authentication, StatusBar, SplashScreen, and Haptics plugins. Google Sign-In URL scheme and Sign in with Apple entitlement configured. Build succeeds on iPhone 17 Pro Simulator (iOS 26.4, Xcode 17).

## Tasks Completed

| Task | Name | Key Files |
|------|------|-----------|
| 1 | Prerequisites: Xcode, CocoaPods, GoogleService-Info.plist, Apple Developer config | GoogleService-Info.plist (with REVERSED_CLIENT_ID) |
| 2 | Initialize Capacitor project, install plugins, configure iOS build | package.json, capacitor.config.json, .capacitorignore, Info.plist, App.entitlements |
| 3 | Verify Capacitor iOS build in Xcode simulator | xcodebuild exit 0 on iPhone 17 Pro Simulator |

## What Was Built

**npm project with 7 packages:**
- @capacitor/core 8.3.0, @capacitor/ios 8.3.0, @capacitor/cli 8.3.0 (dev)
- @capacitor-firebase/authentication 8.2.0
- @capacitor/status-bar 8.0.2, @capacitor/splash-screen 8.0.1, @capacitor/haptics 8.0.2

**capacitor.config.json:**
- appId: com.classofnone.pakt, appName: Pakt, webDir: www
- FirebaseAuthentication plugin with providers: apple.com, google.com
- StatusBar: light style, #0a0f23 background
- SplashScreen: launchAutoHide false (masks Babel parse delay)

**iOS project (ios/App/):**
- Swift Package Manager for plugin resolution (CapApp-SPM)
- GoogleService-Info.plist with CLIENT_ID and REVERSED_CLIENT_ID
- Info.plist with CFBundleURLSchemes for Google Sign-In OAuth redirect
- App.entitlements with Sign in with Apple capability
- Deployment target: iOS 16.0

**Build scripts:**
- `npm run build:web` — copies web assets to www/
- `npm run cap:sync` — build:web + cap sync

**.capacitorignore excludes from iOS bundle:**
- .planning/, Context/, Skills/, Assets/, *.md, node_modules/, ios/, .git/

## Deviations from Plan

1. **webDir "www" instead of "."** — Capacitor 8 rejects "." as invalid webDir. Added www/ build directory with npm scripts to copy web assets before sync. This is a minor workflow change: always run `npm run cap:sync` instead of bare `npx cap sync`.

2. **Swift Package Manager instead of CocoaPods** — Capacitor 8 generates CapApp-SPM with Package.swift, not a Podfile. The project opens via .xcodeproj, not .xcworkspace. CocoaPods is installed but not used by this project.

3. **iPhone 17 Pro simulator** — Plan specified iPhone 16, but Xcode 17 (beta) only has iPhone 17 series and iPhone Air simulators (iOS 26.4).

## Known Stubs

None.

## Threat Flags

- T-01-05 verified: `ios/App/App/public/.planning` does not exist (confirmed .capacitorignore works)
- T-01-04 accepted: GoogleService-Info.plist contains public OAuth client IDs, not secrets
- Google Sign-In REVERSED_CLIENT_ID registered as URL scheme in Info.plist

## Self-Check: PASSED

Acceptance criteria verified:
- [x] package.json contains @capacitor/core
- [x] package.json contains @capacitor-firebase/authentication
- [x] capacitor.config.json contains appId: com.classofnone.pakt
- [x] capacitor.config.json contains webDir: www (deviation from "." — documented above)
- [x] capacitor.config.json contains providers: ["apple.com", "google.com"]
- [x] .capacitorignore contains .planning/
- [x] ios/App/App/GoogleService-Info.plist exists (with REVERSED_CLIENT_ID)
- [x] ios/App/App/AppDelegate.swift contains ApplicationDelegateProxy (Capacitor 8 scaffold)
- [x] ios/App/App/Info.plist contains CFBundleURLSchemes with REVERSED_CLIENT_ID
- [x] npx cap sync completes without errors
- [x] IPHONEOS_DEPLOYMENT_TARGET = 16.0 (4 entries in project.pbxproj)
- [x] xcodebuild exit 0 on iPhone 17 Pro Simulator
- [x] .planning/ not present in ios/App/App/public/

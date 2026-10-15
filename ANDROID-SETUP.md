# Android APK build (no computer required)

This repository contains an Android WebView wrapper around the Stockfish chess app. GitHub Actions builds the website and packages its assets into a **debug APK**. The APK is installable for testing and does not require Termux after installation.

## On Android with Termux and a GitHub account

1. Install `git` in Termux (`pkg install git`). Create an **empty** private repository in GitHub named `stockfish-chess-android` (do not add a README).
2. Extract this ZIP into Termux home, replacing your earlier project if needed. Make sure `.github/workflows/android.yml` is included.
3. In Termux run:

```sh
cd ~/stockfish-chess
git init -b main
git add .
git commit -m "Stockfish Android app"
git remote add origin https://github.com/YOUR_USERNAME/stockfish-chess-android.git
git push -u origin main
```

GitHub requires a personal access token rather than an account password for HTTPS push. Alternatively use SSH authentication. **Never share your token.**

4. On GitHub, open the repository -> Actions -> Build Android APK -> Run workflow. (A push to `main` also starts the build.)
5. After the build succeeds, open its run -> Artifacts -> `stockfish-chess-android-apk`, download and extract the artifact ZIP, and tap `app-debug.apk` to install. Android may request permission to install apps from your browser or Files app.

## Notes

- This is an unsigned-for-release **debug** build, signed with the Android SDK's default debug key by the build process.
- The engine is bundled from the `stockfish` npm package. No network connection is needed for chess play after installation.
- Stockfish is GPLv3; keep its license and source distribution obligations in mind if distributing the APK.
- The workflow has **not been executed here**. If GitHub Actions reports a build failure, share the error log for troubleshooting.

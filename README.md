# Stockfish Chess Studio — Android + PC PWA

A chess app powered by the real Stockfish WebAssembly engine, running locally in your browser. Play against Stockfish, switch sides, analyze positions, import and export PGN, undo moves, and install as a Progressive Web App.

## Requirements
- Node.js 20+ and npm
- Modern Chrome, Edge, or Firefox

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed by Vite (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```
Upload the contents of `dist/` to an HTTPS static hosting service such as Netlify or Cloudflare Pages. Build command: `npm run build`. Publish directory: `dist`.

## Install
- **Android:** open your hosted HTTPS site in Chrome, menu → Add to Home screen / Install app.
- **PC:** open your hosted HTTPS site in Chrome or Edge, click the install icon in the address bar.

Offline use is possible after the app and engine assets are cached by the service worker. Engine startup and offline behavior depend on browser memory and cache constraints.

## Controls
Tap/click a piece and its target square. Pawns auto-promote to queen. Switch between Play and Analysis mode. `Analyze position` shows Stockfish's current evaluation and principal variation. `Ask Stockfish for a move` plays the engine's preferred move. PGN import enters analysis mode.

## Licensing
Stockfish is distributed under **GNU GPL v3**. If distributing this application, comply with Stockfish's GPL obligations, including providing corresponding source and license notices. See https://github.com/official-stockfish/Stockfish . Other packages have their respective licenses.

## Notes
The engine assets are copied automatically from the npm `stockfish` package to `public/engine` by `scripts/copy-engine.mjs` before dev/build. The project intentionally uses the single-threaded engine build to avoid special cross-origin isolation hosting configuration. This repository contains app source, not predownloaded npm dependencies or compiled Stockfish binaries; `npm install` is required.

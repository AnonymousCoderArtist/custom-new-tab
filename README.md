# Custom New Tab

**Live:** https://anonymouscoderartist.github.io/custom-new-tab/

A JARVIS-flavored browser home base — not a theme slapped on Chrome's defaults. Every surface (glass panels, background rays and particles, hero type, dock behavior) is hand-built to feel like *my* dashboard.

## What I built

A completely custom new-tab experience: glass UI, a greeting that shifts with the time of day, a centered search bar, a side dock of shortcuts that **magnifies its neighbors when you hover**, a Super Menu packed with clock, weather, todos, notes, themes, and wallpaper controls, plus an optional geopolitical live map (World Monitor) and animated anime wallpapers you can toggle off when you want focus.

**What's in it:**

- Greeting that changes with time of day
- Search bar in the middle (Google by default, you can change it)
- Glass side dock — add/remove your own shortcuts, hover magnify, click × to delete
- Super Menu (top right) — clock, weather, todos, notes, themes, wallpaper, tools
- Map is optional via the **Show Map** chip — the new tab UI is the main view
- Themes: blue, purple, mixed, minimal (dots in the bottom-right)
- Wallpaper on/off, and a toggle for the JARVIS background effects

Default dashboard link:

```
https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites
```

## What was challenging

- **The map fights you back.** World Monitor blocks being iframed, so the app fetches their HTML client-side, injects a `<base>` tag, rewrites root-relative assets, and smuggles it in via `srcdoc` — with a graceful fallback when that fails.
- **Neighbor magnify is fiddly CSS.** Getting ±1 and ±2 dock icons to scale in a wave (1.35 / 1.18 / 1.08) without clipping or fighting the scroll container took real iteration — `:has()`, padding reserves, mobile overrides.
- **The search bar went through an identity crisis.** Square? Too tall. Bottom-anchored? Not JARVIS enough. Final answer: centered at 54%, pill-sized, chips tucked *inside* the orb directly under the input.
- **Deploy trust.** Every push means polling GitHub Pages until the build is genuinely done and the live bytes match local — CDN caches love to lie for a minute.

## What I'm proud of

The **details that don't announce themselves**:

- Hover the dock and watch the ripple of scale — it feels *alive*.
- The Super Menu has no tacky white sheen; the title still shimmers.
- Fonts are fully local — nothing phones home.
- It ships with a real default dashboard URL, not a placeholder.
- State lives in `localStorage` only. Your todos and notes never leave the browser.

## How to test it

1. **Open it:** https://anonymouscoderartist.github.io/custom-new-tab/ — or locally: `npm run dev` → http://localhost:3000
2. **Watch the greeting** — reload at different times of day; it changes.
3. **Search bar** — dead center. Type and hit Enter (Google by default). Change the engine in Super Menu → Search.
4. **Dock hover test** — mouse across the shortcut icons. Nearest neighbors should scale up in a wave. Click × to delete one, add your own from Super Menu.
5. **Super Menu (top right)** — poke everything: clock, weather, todos, notes, theme dots (bottom-right: blue/purple/mixed/minimal), wallpaper on/off, JARVIS effects toggle, custom dashboard URL.
6. **Map chip** — hit **Show Map**. Should load the exact World Monitor view (conflicts, sanctions, weather, satellites, the works). If it ever blanks, you'll see a fallback instead of a dead frame.
7. **Wallpaper** — flip through live anime videos and photo presets; try it with effects off for a clean, quiet version.

## Run it locally

```bash
npm run dev
```

Then open http://localhost:3000

## Credits

Didn't build everything from scratch — big thanks to:

- **[JARVIS](https://github.com/AgentJarvis1/JARVIS)** — the whole look and feel. Assets in `images/` and `brand/`, glass styling, search bar geometry, hero text, and the background effects all come from here.
- **[World Monitor](https://www.worldmonitor.app)** — the geopolitical dashboard. This project just opens your exact view of it.
- **[Pixabay](https://pixabay.com)** — the live anime video wallpapers.
- **[Unsplash](https://unsplash.com)** — the photo wallpapers (earth, space, city).
- **Fonts** — [Oxanium](https://fonts.google.com/specimen/Oxanium), [Maven Pro](https://fonts.google.com/specimen/Maven+Pro), and [Geist](https://vercel.com/font) (by Vercel), all bundled locally so nothing phones home.
- **Google favicon service** — used for shortcut icons when you don't set a custom one.

## Notes

- State is saved in `localStorage` (`newtab_state_v6`), nothing leaves your browser.
- GitHub Pages deploy: https://anonymouscoderartist.github.io/custom-new-tab/
- Open **Super Menu** to change wallpaper, themes, shortcuts, search engine, or dashboard URL.

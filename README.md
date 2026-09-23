# Custom New Tab

A JARVIS-style browser new tab. Glass UI, greeting hero, side dock of shortcuts, optional map, and live wallpaper.

**Live:** https://anonymouscoderartist.github.io/custom-new-tab/

## What's in it

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

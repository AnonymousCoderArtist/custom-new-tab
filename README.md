# Custom New Tab

My browser start page: greeting by time of day, search in the middle, shortcut dock, optional world map. Dark glass UI.

Live: https://anonymouscoderartist.github.io/custom-new-tab/

## Features

- Greeting that changes with the time of day (morning / afternoon / evening)
- Center search bar, Google by default, switchable in settings
- Shortcut dock on the side with hover magnify; add and remove your own links
- Super Menu (top right): clock, weather, todos, focus timer, notes, themes, wallpaper, tools, settings
- Optional World Monitor map, off by default; open it with the Show Map chip
- Wallpaper on/off plus a JARVIS background effects toggle
- Themes: blue, purple, mixed, minimal (dots in the bottom-right)
- Keyboard shortcuts: `/` focuses search, `Esc` closes menu or map, `1`-`9` open dock slots, `T` opens themes

## Default dashboard URL

```
https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites
```

## How to run locally

```bash
npm run dev
```

Then open http://localhost:3000

## Credits

- [JARVIS](https://github.com/AgentJarvis1/JARVIS): visual style and assets (glow, rays, particles, glass look)
- [World Monitor](https://www.worldmonitor.app): the geopolitical dashboard this tab can embed
- [Pixabay](https://pixabay.com) and [Unsplash](https://unsplash.com): video and photo wallpapers
- Fonts: [Oxanium](https://fonts.google.com/specimen/Oxanium), [Maven Pro](https://fonts.google.com/specimen/Maven+Pro), [Geist](https://vercel.com/font), bundled locally
- Google favicon service for dock icons when you don't set a custom one

## AI Usage

Most of this codebase is mine. I wrote the structure, features, and UI logic. AI (Claude / opencode) helped with early scaffolding, CSS debugging, the World Monitor embed, earlier README drafts, and this pass: keyboard shortcuts, todos / focus / clock rewrites, and README polish.

I chose the product direction, features, and defaults, tested everything in the browser, and reviewed code before it shipped. I wrote the final README and disclosure. Full detail is in [AI_USAGE_DRAFT.md](AI_USAGE_DRAFT.md). Ask me about any part of the code.

## Notes

- All state lives in `localStorage` (`newtab_state_v6`); nothing leaves the browser
- GitHub Pages: https://anonymouscoderartist.github.io/custom-new-tab/
- Open Super Menu to change wallpaper, themes, shortcuts, search engine, or dashboard URL

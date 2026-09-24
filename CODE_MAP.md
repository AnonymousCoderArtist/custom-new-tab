# Code map — how this project fits together

Use this to understand the codebase before you rewrite or extend anything.

## Files

| File | Lines | Role |
|------|------:|------|
| `index.html` | ~363 | Structure: background layers, header, search, dock, Super Menu, map iframe |
| `styles.css` | ~2133 | All styling; big blocks listed below |
| `app.js` | ~912 | State, render functions, event bindings, clock/weather/focus |
| `server.js` | ~48 | Local static server for `npm run dev` |
| `api/frame.js` | ~64 | Vercel-only proxy fallback for embedding the dashboard |
| `fonts/`, `images/`, `brand/` | — | Local fonts + JARVIS-style assets |

## HTML landmarks (`index.html`)

- Pre-paint theme script in `<head>` → reads `localStorage.newtab_theme`
- `.scene` — wallpaper video + JARVIS decorative background (glow, rays, particles)
- `.shell-header` — title + Super Menu button
- `.stage` — greeting hero + `.search-orb` (form + quick-action chips)
- `.dock` — shortcut grid (`#shortcutGrid`)
- `.map-layer` — iframe `#dash` + fallback
- `.menu-back` / Super Menu — tabs: home, themes, wall, tools, settings
  - home: clock, weather, todos, focus timer, notes
  - tools: manage shortcuts, open map
  - settings: dashboard URL, search engine, show-map toggle, reset

## App boot order (`app.js`)

1. Constants: `DEFAULT_DASH`, `THEMES`, `WALLPAPERS`, `DEFAULT_SHORTCUTS`, `defaultState`
2. `loadState()` → merge saved `newtab_state_v6` over defaults
3. `start()`:
   - `applyTheme()`, `applyWallpaper()`, `applyBgEffects()`
   - `renderShortcuts()`, `renderTodos()`, `renderThemeDots()`, …
   - `bind()` — all event listeners
   - `tick()` immediately + `setInterval` for clock/greeting
   - `loadWeather()` if enabled

## Key functions to know

| Function | What it does |
|----------|----------------|
| `loadState` / `saveState` | Read/write `localStorage` key `newtab_state_v6` |
| `applyTheme` | Sets `data-theme`, accent CSS vars, swaps glow/ray images |
| `applyWallpaper` | Photo/video/gradient background from `WALLPAPERS` |
| `renderShortcuts` | Builds dock icons; favicon via Google s2 or letter fallback |
| `openMap` / `loadDashboard` | Fetch WM HTML, rewrite assets, set iframe `srcdoc` |
| `openMenu` / `switchTab` / `closeMenus` | Super Menu visibility + tab panels |
| `renderTodos` / `renderFocus` / `tick` | Home tab features |
| `bind` | Wires search, mic, menu, shortcuts CRUD, settings, keyboard |

## State shape (simplified)

```js
{
  theme, accent,
  wallpaperId, bg, video, bgEffects,
  dashUrl, engine, showDash,
  shortcuts: [{ name, url, icon? }],
  todos: [{ text, done }],
  notes: string,
  // ...other saved prefs
}
```

Storage keys: `newtab_state_v6` (main), `newtab_theme` (pre-paint).

## CSS map (`styles.css`)

- `:root` + theme `[data-theme]` — colors, accent
- `.scene` / `.jarvis-bg` / `.rays` / `.box-glow` — decorative background
- `.shell-header`, `.hero-text` — top bar + greeting
- `.search-orb`, `.glass-input`, `.quick-actions` — center search + chips
- `.dock`, `.shortcut*` — side dock + hover magnify (`:hover`, `+`, `:has()`)
- `.map-layer`, `.dash` — full-screen map view
- `.menu-back`, `.menu-*`, `.theme-*`, `.wall-*` — Super Menu
- `@media (max-width: 720px)` — mobile dock/search adjustments

## World Monitor embed (why it's weird)

1. Site blocks normal iframes.
2. `loadDashboard()` fetches the HTML with `fetch`.
3. Injects `<base href="https://www.worldmonitor.app/">` so relative URLs resolve.
4. Rewrites root-relative `src` / `href` to absolute.
5. Sets `iframe.srcdoc` to the rewritten HTML.
6. On failure: show `#dashFallback` with a link out.

Local `server.js` is unrelated to this; `api/frame.js` is only for Vercel deploys.

## Where to add Feature A (keyboard) / B (bookmarks)

- **Keyboard:** extend the existing `keydown` listener near end of `bind()`.
- **Bookmarks:** new menu section in HTML + tab + `renderBookmarks` + state field + styles reusing `.manage-list`.

See `FEATURE_PLANS.md` for step-by-step checklists.

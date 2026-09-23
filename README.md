# Custom New Tab

A simple new tab page with the World Monitor dashboard, search, and shortcuts for AI tools and daily sites.

Default dashboard link:

`https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites`

## Features

- Live clock, date, and greeting
- World Monitor dashboard with your exact view
- Shortcuts for AI Studio, ChatGPT, Gemini, DeepSeek, Qwen, Claude, YouTube, Google, Instagram, GitHub, and more
- Custom accent, wallpaper, search engine, and dashboard URL
- Add or remove shortcuts
- Hide UI for a clean dashboard view

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Works as a static site on GitHub Pages.

1. Push this repo to GitHub
2. Repo Settings → Pages → Source: `main` / root
3. Open the Pages URL

If GitHub Pages cannot load the dashboard in the browser, use Vercel instead. The `api/frame.js` helper is already included for that.

## Customize

Click the gear icon to change wallpaper, accent color, search engine, and dashboard URL.

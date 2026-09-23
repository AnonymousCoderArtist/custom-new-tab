const DEFAULT_DASH = "https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites";

const OLD_DASH = "https://www.worldmonitor.app/dashboard?lat=11.6774&lon=54.3125&zoom=1.00&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Ceconomic%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports";

const THEMES = {
  midnight: {
    label: "Midnight",
    accent: "#3b82f6",
    bg: "radial-gradient(1200px 700px at 15% 10%, rgba(59,130,246,.35), transparent 60%), radial-gradient(900px 600px at 85% 80%, rgba(14,165,233,.2), transparent 55%), linear-gradient(160deg,#0b1020,#070810 55%,#0a1525)",
    panel: "rgba(10, 12, 18, 0.62)",
    dock: "rgba(10, 12, 18, 0.72)"
  },
  ocean: {
    label: "Ocean",
    accent: "#06b6d4",
    bg: "radial-gradient(1100px 700px at 20% 15%, rgba(6,182,212,.35), transparent 55%), radial-gradient(900px 600px at 90% 85%, rgba(16,185,129,.22), transparent 50%), linear-gradient(160deg,#071418,#061014 55%,#0a1a20)",
    panel: "rgba(6, 14, 18, 0.62)",
    dock: "rgba(6, 14, 18, 0.72)"
  },
  sunset: {
    label: "Sunset",
    accent: "#f59e0b",
    bg: "radial-gradient(1100px 700px at 80% 15%, rgba(245,158,11,.35), transparent 55%), radial-gradient(900px 600px at 10% 85%, rgba(239,68,68,.25), transparent 50%), linear-gradient(160deg,#1a1208,#120c08 55%,#1a1008)",
    panel: "rgba(16, 12, 8, 0.62)",
    dock: "rgba(16, 12, 8, 0.72)"
  },
  forest: {
    label: "Forest",
    accent: "#22c55e",
    bg: "radial-gradient(1100px 700px at 15% 80%, rgba(34,197,94,.3), transparent 55%), radial-gradient(900px 600px at 85% 15%, rgba(163,230,53,.2), transparent 50%), linear-gradient(160deg,#0a1610,#07120c 55%,#0c1a12)",
    panel: "rgba(8, 14, 10, 0.62)",
    dock: "rgba(8, 14, 10, 0.72)"
  },
  rose: {
    label: "Rose",
    accent: "#f43f5e",
    bg: "radial-gradient(1100px 700px at 20% 20%, rgba(244,63,94,.32), transparent 55%), radial-gradient(900px 600px at 90% 80%, rgba(251,146,60,.2), transparent 50%), linear-gradient(160deg,#180b10,#12080c 55%,#1a0c12)",
    panel: "rgba(16, 8, 12, 0.62)",
    dock: "rgba(16, 8, 12, 0.72)"
  },
  graphite: {
    label: "Graphite",
    accent: "#e5e7eb",
    bg: "radial-gradient(1100px 700px at 20% 20%, rgba(229,231,235,.18), transparent 55%), radial-gradient(900px 600px at 90% 80%, rgba(148,163,184,.16), transparent 50%), linear-gradient(160deg,#121418,#0b0c0e 55%,#15171c)",
    panel: "rgba(12, 13, 16, 0.68)",
    dock: "rgba(12, 13, 16, 0.78)"
  }
};

const LIVE_VIDEOS = [
  "https://videos.pexels.com/video-files/30996080/13250028_3840_2160_60fps.mp4",
  "https://videos.pexels.com/video-files/32284504/13768356_1920_1080_60fps.mp4",
  "https://videos.pexels.com/video-files/31424703/13404667_3840_2160_30fps.mp4",
  "https://videos.pexels.com/video-files/30418728/13035271_1920_1080_24fps.mp4",
  "https://videos.pexels.com/video-files/36223937/15362123_1920_1080_120fps.mp4",
  "https://videos.pexels.com/video-files/4568863/4568863-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/29354127/12650284_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/36223586/15361593_1920_1080_120fps.mp4"
];

const WALLPAPERS = [
  { id: "live-aurora", label: "Live Aurora", live: true, bg: "linear-gradient(120deg,#020617,#1e3a5f,#0f766e,#312e81,#020617)" },
  { id: "live-fire", label: "Live Fire", live: true, bg: "linear-gradient(120deg,#1c1917,#9a3412,#b91c1c,#7c2d12,#1c1917)" },
  { id: "live-forest", label: "Live Forest", live: true, bg: "linear-gradient(120deg,#052e16,#166534,#4d7c0f,#14532d,#052e16)" },
  { id: "live-ocean", label: "Live Ocean", live: true, bg: "linear-gradient(120deg,#082f49,#0e7490,#155e75,#1e3a8a,#082f49)" },
  { id: "live-sunset", label: "Live Sunset", live: true, bg: "linear-gradient(120deg,#450a0a,#9f1239,#ea580c,#713f12,#450a0a)" },
  { id: "live-neon", label: "Live Neon", live: true, bg: "linear-gradient(120deg,#020617,#0f172a,#115e59,#164e63,#020617)" },
  { id: "anime-akihabara", label: "Anime Akihabara", video: LIVE_VIDEOS[0] },
  { id: "anime-tokyo", label: "Anime Tokyo Neon", video: LIVE_VIDEOS[1] },
  { id: "anime-sakura", label: "Anime Sakura", video: LIVE_VIDEOS[2] },
  { id: "car-night", label: "Car Night Culture", video: LIVE_VIDEOS[3] },
  { id: "car-drift", label: "Car Drift Road", video: LIVE_VIDEOS[4] },
  { id: "car-bmw", label: "Car BMW Drift", video: LIVE_VIDEOS[5] },
  { id: "car-sunset", label: "Car Drift Sunset", video: LIVE_VIDEOS[6] },
  { id: "car-sport", label: "Car Sport Red", video: LIVE_VIDEOS[7] },
  { id: "photo-earth", label: "Photo Earth", bg: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" },
  { id: "photo-space", label: "Photo Space", bg: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80')" },
  { id: "photo-city", label: "Photo City", bg: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80')" }
];

const defaultWallpaper = WALLPAPERS[0];

const DEFAULT_SHORTCUTS = [
  { name: "AI Studio", url: "https://aistudio.google.com/" },
  { name: "ChatGPT", url: "https://chatgpt.com/" },
  { name: "Gemini", url: "https://gemini.google.com/" },
  { name: "DeepSeek", url: "https://chat.deepseek.com/" },
  { name: "Qwen", url: "https://chat.qwen.ai/" },
  { name: "Claude", url: "https://claude.ai/" },
  { name: "Perplexity", url: "https://www.perplexity.ai/" },
  { name: "Grok", url: "https://grok.com/" },
  { name: "Copilot", url: "https://copilot.microsoft.com/" },
  { name: "Mistral", url: "https://chat.mistral.ai/" },
  { name: "Hugging Face", url: "https://huggingface.co/" },
  { name: "Google", url: "https://www.google.com/" },
  { name: "YouTube", url: "https://www.youtube.com/" },
  { name: "Instagram", url: "https://www.instagram.com/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "X", url: "https://x.com/" },
  { name: "Reddit", url: "https://www.reddit.com/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/" },
  { name: "Discord", url: "https://discord.com/app" },
  { name: "Gmail", url: "https://mail.google.com/" },
  { name: "Maps", url: "https://maps.google.com/" },
  { name: "Spotify", url: "https://open.spotify.com/" },
  { name: "Netflix", url: "https://www.netflix.com/" },
  { name: "Notion", url: "https://www.notion.so/" },
  { name: "Figma", url: "https://www.figma.com/" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/" },
  { name: "Wikipedia", url: "https://en.wikipedia.org/" },
  { name: "World Monitor", url: DEFAULT_DASH }
];

const defaultState = {
  theme: "midnight",
  accent: THEMES.midnight.accent,
  wallpaperId: defaultWallpaper.id,
  bg: defaultWallpaper.bg,
  video: defaultWallpaper.video || "",
  dashUrl: DEFAULT_DASH,
  engine: "https://www.google.com/search?q=",
  showDash: true,
  shortcuts: DEFAULT_SHORTCUTS
};

let state = loadState();

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const raw = localStorage.getItem("newtab_state_v3");
    if (!raw) return structuredClone(defaultState);
    const saved = JSON.parse(raw);
    if (saved.dashUrl === OLD_DASH) saved.dashUrl = DEFAULT_DASH;
    return { ...structuredClone(defaultState), ...saved };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("newtab_state_v3", JSON.stringify(state));
}

function favicon(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return "https://www.google.com/s2/favicons?domain=" + host + "&sz=128";
  } catch {
    return "";
  }
}

function applyWallpaper() {
  const bg = $("bg");
  const video = $("bgVideo");
  const wp = WALLPAPERS.find((w) => w.id === state.wallpaperId);

  if (state.video) {
    bg.style.background = state.bg;
    bg.classList.remove("live");
    if (video.src !== state.video) video.src = state.video;
    video.classList.add("on");
    video.play().catch(() => {});
    return;
  }

  video.classList.remove("on");
  video.removeAttribute("src");
  video.load();
  bg.style.background = state.bg;
  bg.classList.toggle("live", Boolean(wp && wp.live));
}

function applyTheme() {
  const theme = THEMES[state.theme] || THEMES.midnight;
  document.body.className = document.body.className.replace(/theme-[\w-]+/g, "").trim();
  document.body.classList.add("theme-" + state.theme);
  document.documentElement.style.setProperty("--accent", state.accent || theme.accent);
  document.documentElement.style.setProperty("--panel", theme.panel);
  document.documentElement.style.setProperty("--dock", theme.dock);
  applyWallpaper();
}

function rewriteDash(html) {
  const base = "https://www.worldmonitor.app";
  let out = html;
  if (/<head[^>]*>/i.test(out)) {
    out = out.replace(/<head([^>]*)>/i, `<head$1><base href="${base}/">`);
  }
  out = out.replace(/(src|href|action|poster)="\//g, `$1="${base}/`);
  out = out.replace(/(src|href|action|poster)='\//g, `$1='${base}/`);
  out = out.replace(/url\(\/(?!\/)/g, `url(${base}/`);
  return out;
}

function showDashFallback() {
  $("dash").style.display = "none";
  const box = $("dashFallback");
  box.style.display = "flex";
  box.querySelector("a").href = state.dashUrl;
}

async function loadDashboard() {
  const dash = $("dash");
  $("dashFallback").style.display = "none";
  dash.style.display = "";
  dash.removeAttribute("src");
  dash.srcdoc = "";
  try {
    const res = await fetch(state.dashUrl, { mode: "cors" });
    if (!res.ok) throw new Error("bad response");
    const html = await res.text();
    dash.srcdoc = rewriteDash(html);
  } catch (err) {
    try {
      const proxy = "api/frame?u=" + encodeURIComponent(state.dashUrl);
      const probe = await fetch(proxy);
      const type = probe.headers.get("content-type") || "";
      if (probe.ok && type.includes("text/html")) {
        const text = await probe.text();
        if (text.includes("worldmonitor") || text.includes("World Monitor")) {
          dash.srcdoc = text;
          return;
        }
      }
      throw new Error("proxy not available");
    } catch (e) {
      showDashFallback();
    }
  }
}

function setMode(mode) {
  const on = mode === "dashboard" && state.showDash;
  document.body.classList.toggle("mode-dashboard", on);
  $("modeDash").classList.toggle("active", on);
  $("modeHome").classList.toggle("active", !on);
}

function renderDock() {
  const dock = $("dock");
  dock.innerHTML = "";

  state.shortcuts.forEach((item, index) => {
    const a = document.createElement("a");
    a.className = "dock-item";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";

    const img = document.createElement("img");
    img.src = item.icon || favicon(item.url);
    img.alt = "";
    img.loading = "lazy";
    img.onerror = () => {
      const letter = document.createElement("div");
      letter.className = "letter";
      letter.textContent = (item.name || "?").slice(0, 1).toUpperCase();
      img.replaceWith(letter);
    };

    const tip = document.createElement("span");
    tip.className = "tip";
    tip.textContent = item.name;

    const del = document.createElement("button");
    del.className = "del";
    del.type = "button";
    del.textContent = "×";
    del.title = "Remove";
    del.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      state.shortcuts.splice(index, 1);
      saveState();
      renderDock();
    });

    a.append(img, tip, del);
    dock.appendChild(a);
  });

  const add = document.createElement("button");
  add.className = "dock-add";
  add.type = "button";
  add.textContent = "+";
  add.title = "Add shortcut";
  add.addEventListener("click", () => {
    $("nameInput").value = "";
    $("urlInput").value = "";
    $("iconInput").value = "";
    $("addModal").classList.add("open");
  });
  dock.appendChild(add);
}

function tick() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const h = now.getHours();
  let greet = "Good evening";
  if (h < 12) greet = "Good morning";
  else if (h < 18) greet = "Good afternoon";

  $("clock").textContent = time;
  $("miniClock").textContent = time;
  $("date").textContent = date;
  $("miniDate").textContent = date;
  $("greet").textContent = greet;
  $("miniGreet").textContent = greet;
  $("dashLink").href = state.dashUrl;
  $("dashFallbackLink").href = state.dashUrl;
}

function closeModals() {
  document.querySelectorAll(".modal-back").forEach((m) => m.classList.remove("open"));
}

function fillSettings() {
  $("accentInput").value = state.accent;
  $("bgInput").value = state.bg.startsWith("url(") ? state.bg.slice(5, -2) : "";
  $("dashUrlInput").value = state.dashUrl;
  $("engineInput").value = state.engine;
  $("showDashInput").checked = state.showDash;

  const themeRow = $("themeRow");
  themeRow.innerHTML = "";
  Object.entries(THEMES).forEach(([key, theme]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "theme-btn" + (state.theme === key ? " active" : "");
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = theme.bg;
    const label = document.createElement("span");
    label.textContent = theme.label;
    b.append(swatch, label);
    b.addEventListener("click", () => {
      state.theme = key;
      state.accent = theme.accent;
      saveState();
      applyTheme();
      fillSettings();
    });
    themeRow.appendChild(b);
  });

  const box = $("wallpapers");
  box.innerHTML = "";
  WALLPAPERS.forEach((wp) => {
    const b = document.createElement("button");
    b.type = "button";
    b.title = wp.label;
    if (state.wallpaperId === wp.id) b.classList.add("active");
    if (wp.video) {
      b.style.background = "linear-gradient(135deg,#0f172a,#1d4ed8)";
      b.textContent = "▶";
      b.style.color = "#fff";
    } else if (wp.bg.startsWith("url(")) {
      b.style.backgroundImage = wp.bg;
      b.style.backgroundSize = "cover";
    } else {
      b.style.background = wp.bg;
      b.style.backgroundSize = "300% 300%";
      b.style.animation = "liveShift 8s ease infinite";
    }
    b.addEventListener("click", () => {
      state.wallpaperId = wp.id;
      state.bg = wp.bg;
      state.video = wp.video || "";
      saveState();
      applyWallpaper();
      fillSettings();
    });
    box.appendChild(b);
  });
}

function bind() {
  $("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("searchInput").value.trim();
    if (q) window.open(state.engine + encodeURIComponent(q), "_blank");
  });

  $("settingsBtn").addEventListener("click", () => {
    fillSettings();
    $("settingsModal").classList.add("open");
  });

  $("addBtn").addEventListener("click", () => {
    $("nameInput").value = "";
    $("urlInput").value = "";
    $("iconInput").value = "";
    $("addModal").classList.add("open");
  });

  $("saveShortcut").addEventListener("click", () => {
    const name = $("nameInput").value.trim();
    let url = $("urlInput").value.trim();
    if (!name || !url) return;
    if (!/^https?:\/\//.test(url)) url = "https://" + url;
    state.shortcuts.push({ name, url, icon: $("iconInput").value.trim() });
    saveState();
    renderDock();
    closeModals();
  });

  $("accentInput").addEventListener("input", (e) => {
    state.accent = e.target.value;
    saveState();
    applyTheme();
  });

  $("bgInput").addEventListener("change", (e) => {
    const v = e.target.value.trim();
    if (v) {
      state.wallpaperId = "custom";
      state.video = "";
      state.bg = `url('${v}')`;
    } else {
      state.wallpaperId = defaultWallpaper.id;
      state.bg = defaultWallpaper.bg;
      state.video = defaultWallpaper.video || "";
    }
    saveState();
    applyWallpaper();
    fillSettings();
  });

  $("dashUrlInput").addEventListener("change", (e) => {
    state.dashUrl = e.target.value.trim() || DEFAULT_DASH;
    saveState();
    tick();
    loadDashboard();
  });

  $("engineInput").addEventListener("change", (e) => {
    state.engine = e.target.value;
    saveState();
  });

  $("showDashInput").addEventListener("change", (e) => {
    state.showDash = e.target.checked;
    saveState();
    setMode(state.showDash ? "dashboard" : "home");
  });

  $("resetBtn").addEventListener("click", () => {
    state = structuredClone(defaultState);
    saveState();
    applyTheme();
    renderDock();
    fillSettings();
    tick();
    loadDashboard();
    setMode("dashboard");
  });

  $("modeDash").addEventListener("click", () => {
    state.showDash = true;
    saveState();
    setMode("dashboard");
    fillSettings();
  });

  $("modeHome").addEventListener("click", () => {
    setMode("home");
  });

  $("fullscreenBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  $("hideUiBtn").addEventListener("click", () => {
    document.body.classList.add("ui-hidden");
  });

  $("showUiBtn").addEventListener("click", () => {
    document.body.classList.remove("ui-hidden");
  });

  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModals);
  });

  document.querySelectorAll(".modal-back").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === el) closeModals();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== $("searchInput")) {
      e.preventDefault();
      $("searchInput").focus();
    }
    if (e.key === "Escape") closeModals();
  });
}

function start() {
  applyTheme();
  renderDock();
  bind();
  tick();
  setInterval(tick, 1000);
  loadDashboard();
  setMode(state.showDash ? "dashboard" : "home");
}

start();

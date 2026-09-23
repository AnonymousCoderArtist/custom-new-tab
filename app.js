const DEFAULT_DASH = "https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites";

const OLD_DASH = "https://www.worldmonitor.app/dashboard?lat=11.6774&lon=54.3125&zoom=1.00&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Ceconomic%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports";

const THEMES = {
  midnight: {
    label: "Midnight",
    accent: "#3b82f6",
    bg: "radial-gradient(1200px 700px at 15% 10%, rgba(59,130,246,.35), transparent 60%), radial-gradient(900px 600px at 85% 80%, rgba(14,165,233,.2), transparent 55%), linear-gradient(160deg,#0b1020,#070810 55%,#0a1525)",
    panel: "rgba(8, 10, 14, 0.55)",
    dock: "rgba(8, 10, 14, 0.55)"
  },
  ocean: {
    label: "Ocean",
    accent: "#06b6d4",
    bg: "radial-gradient(1100px 700px at 20% 15%, rgba(6,182,212,.35), transparent 55%), radial-gradient(900px 600px at 90% 85%, rgba(16,185,129,.22), transparent 50%), linear-gradient(160deg,#071418,#061014 55%,#0a1a20)",
    panel: "rgba(6, 14, 18, 0.55)",
    dock: "rgba(6, 14, 18, 0.55)"
  },
  sunset: {
    label: "Sunset",
    accent: "#f59e0b",
    bg: "radial-gradient(1100px 700px at 80% 15%, rgba(245,158,11,.35), transparent 55%), radial-gradient(900px 600px at 10% 85%, rgba(239,68,68,.25), transparent 50%), linear-gradient(160deg,#1a1208,#120c08 55%,#1a1008)",
    panel: "rgba(16, 12, 8, 0.55)",
    dock: "rgba(16, 12, 8, 0.55)"
  },
  forest: {
    label: "Forest",
    accent: "#22c55e",
    bg: "radial-gradient(1100px 700px at 15% 80%, rgba(34,197,94,.3), transparent 55%), radial-gradient(900px 600px at 85% 15%, rgba(163,230,53,.2), transparent 50%), linear-gradient(160deg,#0a1610,#07120c 55%,#0c1a12)",
    panel: "rgba(8, 14, 10, 0.55)",
    dock: "rgba(8, 14, 10, 0.55)"
  },
  ember: {
    label: "Ember",
    accent: "#f97316",
    bg: "radial-gradient(1100px 700px at 20% 20%, rgba(249,115,22,.32), transparent 55%), radial-gradient(900px 600px at 90% 80%, rgba(234,88,12,.22), transparent 50%), linear-gradient(160deg,#1a0e08,#140c08 55%,#1c100a)",
    panel: "rgba(16, 10, 6, 0.55)",
    dock: "rgba(16, 10, 6, 0.55)"
  },
  crimson: {
    label: "Crimson",
    accent: "#ef4444",
    bg: "radial-gradient(1100px 700px at 20% 20%, rgba(239,68,68,.3), transparent 55%), radial-gradient(900px 600px at 90% 80%, rgba(251,146,60,.18), transparent 50%), linear-gradient(160deg,#180a0a,#120808 55%,#1a0c0c)",
    panel: "rgba(16, 8, 8, 0.55)",
    dock: "rgba(16, 8, 8, 0.55)"
  },
  ice: {
    label: "Ice",
    accent: "#38bdf8",
    bg: "radial-gradient(1100px 700px at 20% 15%, rgba(56,189,248,.3), transparent 55%), radial-gradient(900px 600px at 90% 85%, rgba(125,211,252,.18), transparent 50%), linear-gradient(160deg,#0b1520,#081018 55%,#0c1822)",
    panel: "rgba(8, 14, 20, 0.55)",
    dock: "rgba(8, 14, 20, 0.55)"
  },
  graphite: {
    label: "Graphite",
    accent: "#e5e7eb",
    bg: "radial-gradient(1100px 700px at 20% 20%, rgba(229,231,235,.16), transparent 55%), radial-gradient(900px 600px at 90% 80%, rgba(148,163,184,.14), transparent 50%), linear-gradient(160deg,#121418,#0b0c0e 55%,#15171c)",
    panel: "rgba(10, 11, 14, 0.58)",
    dock: "rgba(10, 11, 14, 0.58)"
  },
  lime: {
    label: "Lime",
    accent: "#a3e635",
    bg: "radial-gradient(1100px 700px at 15% 20%, rgba(163,230,53,.28), transparent 55%), radial-gradient(900px 600px at 90% 80%, rgba(63,98,18,.25), transparent 50%), linear-gradient(160deg,#0f160a,#0c1208 55%,#121a0c)",
    panel: "rgba(10, 14, 6, 0.55)",
    dock: "rgba(10, 14, 6, 0.55)"
  }
};

const LIVE_VIDEOS = [
  "https://cdn.pixabay.com/video/2024/06/05/215407_large.mp4",
  "https://cdn.pixabay.com/video/2024/05/30/214500_large.mp4",
  "https://cdn.pixabay.com/video/2024/09/03/229513_large.mp4",
  "https://cdn.pixabay.com/video/2021/10/01/90408-626004752_large.mp4",
  "https://cdn.pixabay.com/video/2025/02/26/261085_large.mp4",
  "https://cdn.pixabay.com/video/2024/10/08/235338_large.mp4",
  "https://cdn.pixabay.com/video/2024/03/01/202600-918484146_large.mp4",
  "https://cdn.pixabay.com/video/2022/08/21/128646-741704858_large.mp4",
  "https://cdn.pixabay.com/video/2024/09/13/231156_large.mp4"
];

const WALLPAPERS = [
  { id: "live-aurora", label: "Live Aurora", live: true, bg: "linear-gradient(120deg,#020617,#0369a1,#0d9488,#0284c7,#020617)" },
  { id: "live-fire", label: "Live Fire", live: true, bg: "linear-gradient(120deg,#1c1917,#ea580c,#dc2626,#b45309,#1c1917)" },
  { id: "live-forest", label: "Live Forest", live: true, bg: "linear-gradient(120deg,#052e16,#16a34a,#65a30d,#15803d,#052e16)" },
  { id: "live-ocean", label: "Live Ocean", live: true, bg: "linear-gradient(120deg,#082f49,#0ea5e9,#06b6d4,#2563eb,#082f49)" },
  { id: "live-sunset", label: "Live Sunset", live: true, bg: "linear-gradient(120deg,#450a0a,#e11d48,#f97316,#ca8a04,#450a0a)" },
  { id: "live-neon", label: "Live Neon", live: true, bg: "linear-gradient(120deg,#020617,#0f172a,#06b6d4,#0284c7,#020617)" },
  { id: "live-graphite", label: "Live Graphite", live: true, bg: "linear-gradient(120deg,#09090b,#3f3f46,#71717a,#3f3f46,#09090b)" },
  { id: "anime-lofi-study", label: "Anime Lofi Study", video: LIVE_VIDEOS[0] },
  { id: "anime-study", label: "Anime Study", video: LIVE_VIDEOS[1] },
  { id: "anime-rain", label: "Anime Rain Night", video: LIVE_VIDEOS[2] },
  { id: "anime-train", label: "Anime Train Sunset", video: LIVE_VIDEOS[3] },
  { id: "anime-roof", label: "Anime Roof Sunset", video: LIVE_VIDEOS[4] },
  { id: "anime-glitter", label: "Anime Glitter Girl", video: LIVE_VIDEOS[5] },
  { id: "anime-umbrella", label: "Anime Umbrella", video: LIVE_VIDEOS[6] },
  { id: "anime-obito", label: "Anime Obito", video: LIVE_VIDEOS[7] },
  { id: "anime-forest", label: "Anime Forest Rain", video: LIVE_VIDEOS[8] },
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
    const raw = localStorage.getItem("newtab_state_v4");
    if (!raw) return structuredClone(defaultState);
    const saved = JSON.parse(raw);
    if (saved.dashUrl === OLD_DASH) saved.dashUrl = DEFAULT_DASH;
    if (!saved.wallpaperId) {
      saved.wallpaperId = defaultWallpaper.id;
      saved.bg = defaultWallpaper.bg;
      saved.video = "";
    }
    return { ...structuredClone(defaultState), ...saved };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("newtab_state_v4", JSON.stringify(state));
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
  const wp = WALLPAPERS.find((w) => w.id === state.wallpaperId) || defaultWallpaper;

  if (state.video) {
    bg.classList.remove("live");
    bg.style.backgroundImage = "";
    if (!video.src || !video.src.includes(state.video)) {
      video.src = state.video;
      video.load();
    }
    video.classList.add("on");
    video.play().catch(() => {});
    return;
  }

  video.classList.remove("on");
  video.pause();
  video.removeAttribute("src");
  video.load();
  bg.style.backgroundImage = state.bg.startsWith("url(") || state.bg.startsWith("linear") || state.bg.startsWith("radial") ? state.bg : "";
  if (state.bg.startsWith("url(") || state.bg.startsWith("linear") || state.bg.startsWith("radial")) {
    bg.style.background = state.bg;
    bg.style.backgroundSize = "400% 400%";
  }
  bg.classList.toggle("live", Boolean(wp.live));
  if (wp.live) {
    bg.style.animation = "none";
    void bg.offsetWidth;
    bg.style.animation = "";
  }
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

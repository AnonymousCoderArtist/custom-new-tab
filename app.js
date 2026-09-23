const DEFAULT_DASH = "https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites";

const OLD_DASH = "https://www.worldmonitor.app/dashboard?lat=11.6774&lon=54.3125&zoom=1.00&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Ceconomic%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports";

const THEMES = {
  blue: { label: "Blue", accent: "#553DFF", dot: "#553DFF", bg: "linear-gradient(135deg,#0b1030,#1a0e6e 45%,#050a14)" },
  purple: { label: "Purple", accent: "#9B6AFF", dot: "#9B6AFF", bg: "linear-gradient(135deg,#1a0a30,#4A1FA0 45%,#0a0614)" },
  mixed: { label: "Mixed", accent: "#7A5AFF", dot: "#7A5AFF", bg: "linear-gradient(135deg,#101040,#553DFF 45%,#080818)" },
  minimal: { label: "Minimal", accent: "#333333", dot: "#333333", bg: "linear-gradient(135deg,#111,#333 45%,#000)" }
};

const THEME_IMAGES = {
  blue: {
    glow: "images/glow-circle.svg",
    raysSvg: "images/vector-2868.svg",
    ambient1: "images/ambient-below-1.svg",
    ambient2: "images/ambient-below-2.svg",
    ambient3: "images/ambient-below-3.svg",
    single: false
  },
  mixed: {
    glow: "images/glow-circle.svg",
    raysSvg: "images/rays-purple.svg",
    ambient1: "images/ambient-below-1-mixed.svg",
    ambient2: "images/ambient-below-2-mixed.svg",
    ambient3: "images/ambient-below-3-mixed.svg",
    single: true
  },
  purple: {
    glow: "images/glow-circle-purple.png",
    raysSvg: "images/rays-purple.svg",
    ambient1: "images/ambient-below-1-purple.svg",
    ambient2: "images/ambient-below-2-purple.svg",
    ambient3: "images/ambient-below-3.svg",
    single: true
  },
  minimal: {
    glow: "images/glow-circle.svg",
    raysSvg: "images/vector-2868.svg",
    ambient1: "images/ambient-below-1.svg",
    ambient2: "images/ambient-below-2.svg",
    ambient3: "images/ambient-below-3.svg",
    single: false
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
  { id: "none", label: "Remove background", bg: "" },
  { id: "anime-lofi-study", label: "Anime Lofi Study", video: LIVE_VIDEOS[0] },
  { id: "anime-study", label: "Anime Study", video: LIVE_VIDEOS[1] },
  { id: "anime-rain", label: "Anime Rain Night", video: LIVE_VIDEOS[2] },
  { id: "anime-train", label: "Anime Train Sunset", video: LIVE_VIDEOS[3] },
  { id: "anime-roof", label: "Anime Roof Sunset", video: LIVE_VIDEOS[4] },
  { id: "anime-glitter", label: "Anime Glitter Girl", video: LIVE_VIDEOS[5] },
  { id: "anime-umbrella", label: "Anime Umbrella", video: LIVE_VIDEOS[6] },
  { id: "anime-obito", label: "Anime Obito", video: LIVE_VIDEOS[7] },
  { id: "anime-forest", label: "Anime Forest Rain", video: LIVE_VIDEOS[8] },
  { id: "live-aurora", label: "Live Aurora", live: true, bg: "linear-gradient(120deg,#020617,#0369a1,#0d9488,#0284c7,#020617)" },
  { id: "live-fire", label: "Live Fire", live: true, bg: "linear-gradient(120deg,#1c1917,#ea580c,#dc2626,#b45309,#1c1917)" },
  { id: "live-graphite", label: "Live Graphite", live: true, bg: "linear-gradient(120deg,#09090b,#3f3f46,#71717a,#3f3f46,#09090b)" },
  { id: "photo-earth", label: "Photo Earth", bg: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" },
  { id: "photo-space", label: "Photo Space", bg: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80')" },
  { id: "photo-city", label: "Photo City", bg: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80')" },
  { id: "jarvis-plain", label: "Jarvis only", bg: "" }
];

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
  theme: "blue",
  accent: THEMES.blue.accent,
  wallpaperId: "anime-lofi-study",
  bg: "",
  video: LIVE_VIDEOS[0],
  bgEffects: true,
  dashUrl: DEFAULT_DASH,
  engine: "https://www.google.com/search?q=",
  showDash: false,
  shortcuts: DEFAULT_SHORTCUTS,
  todos: [],
  notes: ""
};

let state = loadState();
const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const raw = localStorage.getItem("newtab_state_v6");
    if (!raw) return structuredClone(defaultState);
    const saved = JSON.parse(raw);
    if (saved.dashUrl === OLD_DASH) saved.dashUrl = DEFAULT_DASH;
    if (!THEMES[saved.theme]) saved.theme = "blue";
    if (saved.bgEffects === undefined) saved.bgEffects = true;
    return { ...structuredClone(defaultState), ...saved };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("newtab_state_v6", JSON.stringify(state));
}

function favicon(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return "https://www.google.com/s2/favicons?domain=" + host + "&sz=128";
  } catch {
    return "";
  }
}

function applyTheme() {
  const theme = THEMES[state.theme] || THEMES.blue;
  document.documentElement.setAttribute("data-theme", state.theme);
  try {
    localStorage.setItem("newtab_theme", state.theme);
  } catch (e) {}
  document.documentElement.style.setProperty("--accent-bright", state.accent || theme.accent);

  const imgs = THEME_IMAGES[state.theme] || THEME_IMAGES.blue;
  const glow = $("imgGlow");
  const amb1 = $("imgAmb1");
  const amb2 = $("imgAmb2");
  const amb3 = $("imgAmb3");
  if (glow) glow.src = imgs.glow;
  if (amb1) amb1.src = imgs.ambient1;
  if (amb2) amb2.src = imgs.ambient2;
  if (amb3) amb3.src = imgs.ambient3;

  const multi = $("raysMulti");
  const single = $("raysSingle");
  const singleImg = $("imgRaysSingle");
  if (multi && single) {
    if (imgs.single) {
      multi.hidden = true;
      multi.style.display = "none";
      single.hidden = false;
      single.style.display = "";
      if (singleImg) singleImg.src = imgs.raysSvg;
    } else {
      multi.hidden = false;
      multi.style.display = "";
      single.hidden = true;
      single.style.display = "none";
    }
  }

  renderThemeDots();
}

function applyWallpaper() {
  const wp = $("wallpaper");
  const video = $("bgVideo");
  const item = WALLPAPERS.find((w) => w.id === state.wallpaperId) || WALLPAPERS[0];
  const noBg = state.wallpaperId === "none" || state.wallpaperId === "jarvis-plain";

  if (noBg && !state.video && !state.bg) {
    video.classList.remove("on");
    video.pause();
    video.removeAttribute("src");
    video.load();
    wp.classList.remove("live");
    wp.style.background = "";
    wp.style.backgroundImage = "";
    wp.style.opacity = "0";
    return;
  }

  wp.style.opacity = "";

  if (state.video) {
    wp.classList.remove("live");
    wp.style.backgroundImage = "";
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
  if (state.bg) {
    wp.style.background = state.bg;
    wp.style.backgroundSize = state.bg.startsWith("url(") ? "cover" : "400% 400%";
  } else {
    wp.style.background = "";
    wp.style.backgroundImage = "";
    wp.style.opacity = "0";
    return;
  }
  wp.classList.toggle("live", Boolean(item.live));
}

function applyBgEffects() {
  const on = state.bgEffects !== false;
  const jarvis = $("jarvisBg");
  const rays = $("rays");
  const particles = document.querySelector(".particles-layer");
  const boxGlows = document.querySelectorAll(".box-glow");
  if (jarvis) jarvis.style.display = on ? "" : "none";
  if (rays) rays.style.display = on ? "" : "none";
  if (particles) particles.style.display = on ? "" : "none";
  boxGlows.forEach((el) => {
    el.style.display = on ? "" : "none";
  });
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
  $("dashFallback").classList.add("open");
  $("dashFallbackLink").href = state.dashUrl;
}

async function loadDashboard() {
  const dash = $("dash");
  $("dashFallback").classList.remove("open");
  dash.style.display = "";
  dash.removeAttribute("src");
  dash.srcdoc = "";
  try {
    const res = await fetch(state.dashUrl, { mode: "cors" });
    if (!res.ok) throw new Error("bad response");
    const html = await res.text();
    dash.srcdoc = rewriteDash(html);
  } catch {
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
      throw new Error("proxy");
    } catch {
      showDashFallback();
    }
  }
}

function openMap() {
  $("mapLayer").hidden = false;
  $("modeDash").classList.add("active");
  loadDashboard();
}

function closeMap() {
  $("mapLayer").hidden = true;
  const btn = $("modeDash");
  if (btn) btn.classList.remove("active");
}

function renderShortcuts() {
  const grid = $("shortcutGrid");
  grid.innerHTML = "";
  state.shortcuts.forEach((item, index) => {
    const wrap = document.createElement("div");
    wrap.className = "shortcut-wrap";

    const a = document.createElement("a");
    a.className = "shortcut";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.title = item.name;

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

    const span = document.createElement("span");
    span.className = "name";
    span.textContent = item.name;

    a.append(img, span);

    const del = document.createElement("button");
    del.className = "del";
    del.type = "button";
    del.textContent = "×";
    del.title = "Remove";
    del.setAttribute("aria-label", `Remove ${item.name}`);
    del.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!confirm(`Remove ${item.name}?`)) return;
      state.shortcuts.splice(index, 1);
      saveState();
      renderShortcuts();
      renderManage();
    });

    wrap.append(a, del);
    grid.appendChild(wrap);
  });
}

function renderManage() {
  const list = $("manageList");
  list.innerHTML = "";
  state.shortcuts.forEach((item, index) => {
    const b = document.createElement("button");
    b.type = "button";
    b.innerHTML = `<span>${item.name}</span><span>Remove</span>`;
    b.addEventListener("click", () => {
      state.shortcuts.splice(index, 1);
      saveState();
      renderShortcuts();
      renderManage();
    });
    list.appendChild(b);
  });
}

function renderTodos() {
  const list = $("todoList");
  list.innerHTML = "";
  if (!state.todos.length) {
    const empty = document.createElement("li");
    empty.className = "todo-empty";
    empty.textContent = "No tasks yet";
    list.appendChild(empty);
    return;
  }
  state.todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("done");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = todo.done;
    check.addEventListener("change", () => {
      state.todos[index].done = check.checked;
      saveState();
      renderTodos();
    });
    const span = document.createElement("span");
    span.textContent = todo.text;
    const del = document.createElement("button");
    del.type = "button";
    del.textContent = "×";
    del.addEventListener("click", () => {
      state.todos.splice(index, 1);
      saveState();
      renderTodos();
    });
    li.append(check, span, del);
    list.appendChild(li);
  });
}

function highlightSub(text) {
  const parts = text.split(/(you today \?|assist you)/i);
  if (parts.length < 2) return text;
  return parts
    .map((p, i) => (i % 2 === 1 ? `<span class="hi">${p}</span>` : p))
    .join("");
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
  let greet = "Good evening.";
  if (h < 12) greet = "Good morning.";
  else if (h < 18) greet = "Good afternoon.";

  const sub = "How can i assist you today ?";
  $("greetLine").textContent = greet;
  $("greetLine2").textContent = greet;
  $("greetSub").innerHTML = highlightSub(sub);
  $("greetSub2").innerHTML = highlightSub(sub);
  $("statClock").textContent = time;
  $("statDate").textContent = date;
  $("dashLink").href = state.dashUrl;
  $("dashLink2").href = state.dashUrl;
  $("dashFallbackLink").href = state.dashUrl;
  $("mapOpenLink").href = state.dashUrl;
}

const WEATHER_CODES = {
  0: "Clear",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Violent showers",
  95: "Thunderstorm",
  96: "Thunderstorm hail",
  99: "Thunderstorm hail"
};

async function loadWeather() {
  try {
    let lat = 28.61;
    let lon = 77.21;
    if (navigator.geolocation) {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 4000, maximumAge: 600000 });
      });
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;
    }
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather");
    const data = await res.json();
    const cur = data.current;
    $("weatherTemp").textContent = Math.round(cur.temperature_2m) + "°";
    const desc = WEATHER_CODES[cur.weather_code] || "Conditions";
    $("weatherMeta").textContent = `${desc} · ${Math.round(cur.relative_humidity_2m)}% RH · ${Math.round(cur.wind_speed_10m)} km/h`;
  } catch {
    $("weatherTemp").textContent = "--°";
    $("weatherMeta").textContent = "Weather unavailable";
  }
}

function renderThemeDots() {
  const box = $("themeDots");
  if (!box) return;
  box.innerHTML = "";
  Object.entries(THEMES).forEach(([key, theme]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "theme-dot" + (state.theme === key ? " active" : "");
    b.title = theme.label;
    b.style.background = theme.dot;
    b.style.color = theme.dot;
    b.addEventListener("click", () => {
      state.theme = key;
      state.accent = theme.accent;
      saveState();
      applyTheme();
      renderThemes();
      $("accentInput").value = state.accent;
    });
    box.appendChild(b);
  });
}

function openMenu(tab) {
  $("superMenu").hidden = false;
  if (tab) switchTab(tab);
  renderThemes();
  renderWall();
  renderManage();
}

function closeMenus() {
  $("superMenu").hidden = true;
  $("addModal").hidden = true;
}

function switchTab(name) {
  document.querySelectorAll(".menu-tab").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === name);
  });
  document.querySelectorAll(".menu-section").forEach((s) => {
    s.classList.toggle("active", s.dataset.section === name);
  });
}

function renderThemes() {
  const grid = $("themeGrid");
  grid.innerHTML = "";
  Object.entries(THEMES).forEach(([key, theme]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "theme-card" + (state.theme === key ? " active" : "");
    b.innerHTML = `<span class="theme-swatch" style="background:${theme.bg}"></span><strong>${theme.label}</strong>`;
    b.addEventListener("click", () => {
      state.theme = key;
      state.accent = theme.accent;
      saveState();
      applyTheme();
      renderThemes();
      $("accentInput").value = state.accent;
    });
    grid.appendChild(b);
  });
}

function renderWall() {
  const grid = $("wallGrid");
  grid.innerHTML = "";
  WALLPAPERS.forEach((wp) => {
    const b = document.createElement("button");
    b.type = "button";
    b.title = wp.label;
    if (state.wallpaperId === wp.id) b.classList.add("active");
    if (wp.video) {
      b.style.background = "linear-gradient(135deg,#0f172a,#553DFF)";
      b.textContent = "▶";
      b.style.color = "#fff";
    } else if (wp.bg && wp.bg.startsWith("url(")) {
      b.style.backgroundImage = wp.bg;
      b.style.backgroundSize = "cover";
      b.textContent = "◻";
      b.style.color = "#fff";
    } else if (wp.bg) {
      b.style.background = wp.bg;
      b.style.backgroundSize = "300% 300%";
      b.style.animation = "liveShift 8s ease infinite";
    } else {
      b.style.background = "rgba(255,255,255,0.06)";
      b.textContent = wp.id === "none" ? "✕" : "∅";
      b.style.color = "rgba(255,255,255,0.7)";
    }
    b.addEventListener("click", () => {
      state.wallpaperId = wp.id;
      state.bg = wp.bg || "";
      state.video = wp.video || "";
      if (wp.id === "none") state.bgEffects = false;
      if (wp.id === "jarvis-plain") state.bgEffects = true;
      saveState();
      applyWallpaper();
      applyBgEffects();
      renderWall();
      syncBgControls();
      $("bgInput").value = state.bg.startsWith("url(") ? state.bg.slice(5, -2) : "";
    });
    grid.appendChild(b);
  });
}

function syncBgControls() {
  const removeBg = $("removeBgInput");
  const effects = $("bgEffectsInput");
  if (removeBg) {
    removeBg.checked = state.wallpaperId === "none" || (!state.video && !state.bg);
  }
  if (effects) effects.checked = state.bgEffects !== false;
}

function fillSettings() {
  $("accentInput").value = state.accent;
  $("bgInput").value = state.bg && state.bg.startsWith("url(") ? state.bg.slice(5, -2) : "";
  $("dashUrlInput").value = state.dashUrl;
  $("engineInput").value = state.engine;
  $("showDashInput").checked = state.showDash;
  $("notesInput").value = state.notes || "";
  syncBgControls();
}

let focusMode = "work";
let focusLeft = 25 * 60;
let focusTimer = null;

function renderFocus() {
  const m = String(Math.floor(focusLeft / 60)).padStart(2, "0");
  const s = String(focusLeft % 60).padStart(2, "0");
  $("focusTime").textContent = `${m}:${s}`;
  $("focusStart").textContent = focusTimer ? "Pause" : "Start";
}

function stopFocus() {
  if (focusTimer) clearInterval(focusTimer);
  focusTimer = null;
  renderFocus();
}

function startFocus() {
  if (focusTimer) {
    stopFocus();
    return;
  }
  focusTimer = setInterval(() => {
    focusLeft -= 1;
    if (focusLeft <= 0) {
      focusLeft = focusMode === "work" ? 5 * 60 : 25 * 60;
      focusMode = focusMode === "work" ? "break" : "work";
      stopFocus();
      return;
    }
    renderFocus();
  }, 1000);
  renderFocus();
}

function removeWallpaper() {
  state.wallpaperId = "none";
  state.bg = "";
  state.video = "";
  saveState();
  applyWallpaper();
  renderWall();
  syncBgControls();
  $("bgInput").value = "";
}

function bind() {
  $("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("searchInput").value.trim();
    if (q) window.open(state.engine + encodeURIComponent(q), "_blank");
  });

  $("micBtn").addEventListener("click", () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert("Voice search is not supported in this browser.");
      return;
    }
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    $("micBtn").style.color = "#ef4444";
    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      $("searchInput").value = text;
      window.open(state.engine + encodeURIComponent(text), "_blank");
    };
    rec.onend = () => {
      $("micBtn").style.color = "";
    };
    rec.start();
  });

  $("superMenuBtn").addEventListener("click", () => openMenu("home"));
  $("themesBtn").addEventListener("click", () => openMenu("themes"));

  document.querySelectorAll(".menu-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  $("addShortcutBtn").addEventListener("click", () => {
    $("nameInput").value = "";
    $("urlInput").value = "";
    $("iconInput").value = "";
    $("addModal").hidden = false;
  });

  $("saveShortcut").addEventListener("click", () => {
    const name = $("nameInput").value.trim();
    let url = $("urlInput").value.trim();
    if (!name || !url) return;
    if (!/^https?:\/\//.test(url)) url = "https://" + url;
    state.shortcuts.push({ name, url, icon: $("iconInput").value.trim() });
    saveState();
    renderShortcuts();
    renderManage();
    closeMenus();
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
      state.bgEffects = true;
    } else {
      removeWallpaper();
      return;
    }
    saveState();
    applyWallpaper();
    applyBgEffects();
    renderWall();
    syncBgControls();
  });

  $("dashUrlInput").addEventListener("change", (e) => {
    state.dashUrl = e.target.value.trim() || DEFAULT_DASH;
    saveState();
    tick();
    if (!$("mapLayer").hidden) loadDashboard();
  });

  $("engineInput").addEventListener("change", (e) => {
    state.engine = e.target.value;
    saveState();
  });

  $("showDashInput").addEventListener("change", (e) => {
    state.showDash = e.target.checked;
    saveState();
  });

  $("removeBgInput").addEventListener("change", (e) => {
    if (e.target.checked) removeWallpaper();
    else {
      state.wallpaperId = "anime-lofi-study";
      state.video = LIVE_VIDEOS[0];
      state.bg = "";
      state.bgEffects = true;
      saveState();
      applyWallpaper();
      applyBgEffects();
      renderWall();
      syncBgControls();
    }
  });

  $("bgEffectsInput").addEventListener("change", (e) => {
    state.bgEffects = e.target.checked;
    saveState();
    applyBgEffects();
    syncBgControls();
  });

  $("resetBtn").addEventListener("click", () => {
    state = structuredClone(defaultState);
    saveState();
    applyTheme();
    applyWallpaper();
    applyBgEffects();
    renderShortcuts();
    renderTodos();
    renderThemes();
    renderWall();
    renderManage();
    fillSettings();
    tick();
    closeMenus();
    closeMap();
  });

  $("modeDash").addEventListener("click", openMap);
  $("closeMapBtn").addEventListener("click", closeMap);
  $("openMapMenuBtn").addEventListener("click", () => {
    closeMenus();
    openMap();
  });
  $("dashLink").addEventListener("click", (e) => {
    e.preventDefault();
    openMap();
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

  $("brandHome").addEventListener("click", (e) => {
    e.preventDefault();
    closeMap();
    closeMenus();
  });

  $("todoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = $("todoInput").value.trim();
    if (!text) return;
    state.todos.unshift({ text, done: false });
    $("todoInput").value = "";
    saveState();
    renderTodos();
  });

  $("notesInput").addEventListener("input", (e) => {
    state.notes = e.target.value;
    saveState();
  });

  $("focusStart").addEventListener("click", startFocus);
  $("focusReset").addEventListener("click", () => {
    stopFocus();
    focusMode = "work";
    focusLeft = 25 * 60;
    renderFocus();
  });
  $("focusBreak").addEventListener("click", () => {
    stopFocus();
    focusMode = "break";
    focusLeft = 5 * 60;
    renderFocus();
  });

  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeMenus);
  });

  document.querySelectorAll(".menu-back").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === el) closeMenus();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== $("searchInput")) {
      e.preventDefault();
      $("searchInput").focus();
    }
    if (e.key === "Escape") {
      closeMenus();
      if (!$("mapLayer").hidden) closeMap();
    }
  });
}

function start() {
  applyTheme();
  applyWallpaper();
  applyBgEffects();
  renderShortcuts();
  renderTodos();
  renderThemes();
  renderWall();
  renderThemeDots();
  fillSettings();
  renderFocus();
  bind();
  tick();
  setInterval(tick, 1000);
  loadWeather();
  if (state.showDash) openMap();
  else closeMap();
}

start();

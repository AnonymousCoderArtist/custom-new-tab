const DEFAULT_DASH = "https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites";

const OLD_DASH = "https://www.worldmonitor.app/dashboard?lat=11.6774&lon=54.3125&zoom=1.00&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Ceconomic%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports";

const WALLPAPERS = [
  "radial-gradient(1200px 700px at 15% 10%, rgba(124,92,255,.35), transparent 60%), radial-gradient(900px 600px at 85% 80%, rgba(0,200,255,.22), transparent 55%), linear-gradient(160deg,#0b1020,#070810 55%,#12081c)",
  "radial-gradient(900px 600px at 80% 20%, rgba(255,80,120,.35), transparent 55%), radial-gradient(800px 700px at 10% 90%, rgba(255,180,60,.25), transparent 50%), linear-gradient(160deg,#1a0b14,#09070f 60%,#140a10)",
  "radial-gradient(1000px 700px at 20% 80%, rgba(40,255,180,.25), transparent 55%), radial-gradient(900px 500px at 90% 10%, rgba(60,120,255,.3), transparent 50%), linear-gradient(160deg,#071418,#061010 50%,#0a1a14)",
  "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80')"
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
  accent: "#7c5cff",
  bg: WALLPAPERS[0],
  dashUrl: DEFAULT_DASH,
  engine: "https://www.google.com/search?q=",
  showDash: true,
  shortcuts: DEFAULT_SHORTCUTS
};

let state = loadState();
let editingId = null;

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const raw = localStorage.getItem("newtab_state_v2");
    if (!raw) return structuredClone(defaultState);
    const saved = JSON.parse(raw);
    if (saved.dashUrl === OLD_DASH) saved.dashUrl = DEFAULT_DASH;
    return { ...structuredClone(defaultState), ...saved };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("newtab_state_v2", JSON.stringify(state));
}

function favicon(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return "https://www.google.com/s2/favicons?domain=" + host + "&sz=128";
  } catch {
    return "";
  }
}

function applyStyle() {
  document.documentElement.style.setProperty("--accent", state.accent);
  $("bg").style.background = state.bg;
  $("bg").style.backgroundSize = "cover";
  $("bg").style.backgroundPosition = "center";
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
  const box = document.getElementById("dashFallback");
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
  document.body.classList.toggle("mode-dashboard", mode === "dashboard" && state.showDash);
  $("modeDash").classList.toggle("active", mode === "dashboard" && state.showDash);
  $("modeHome").classList.toggle("active", !(mode === "dashboard" && state.showDash));
}

function renderShortcuts() {
  const grid = $("grid");
  grid.innerHTML = "";
  state.shortcuts.forEach((item, index) => {
    const a = document.createElement("a");
    a.className = "tile";
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

    const span = document.createElement("span");
    span.textContent = item.name;

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
      renderShortcuts();
    });

    a.append(img, span, del);
    grid.appendChild(a);
  });
}

function tick() {
  const now = new Date();
  $("clock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  $("date").textContent = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const h = now.getHours();
  let greet = "Good evening";
  if (h < 12) greet = "Good morning";
  else if (h < 18) greet = "Good afternoon";
  $("greet").textContent = greet;
}

function openModal(id) {
  $(id).classList.add("open");
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

  const box = $("wallpapers");
  box.innerHTML = "";
  WALLPAPERS.forEach((wp) => {
    const b = document.createElement("button");
    b.type = "button";
    if (wp === state.bg) b.classList.add("active");
    if (wp.startsWith("url(")) {
      b.style.backgroundImage = wp;
      b.style.backgroundSize = "cover";
    } else {
      b.style.background = wp;
    }
    b.addEventListener("click", () => {
      state.bg = wp;
      saveState();
      applyStyle();
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
    openModal("settingsModal");
  });

  $("addBtn").addEventListener("click", () => {
    editingId = null;
    $("nameInput").value = "";
    $("urlInput").value = "";
    $("iconInput").value = "";
    openModal("addModal");
  });

  $("saveShortcut").addEventListener("click", () => {
    const name = $("nameInput").value.trim();
    let url = $("urlInput").value.trim();
    if (!name || !url) return;
    if (!/^https?:\/\//.test(url)) url = "https://" + url;
    state.shortcuts.push({ name, url, icon: $("iconInput").value.trim() });
    saveState();
    renderShortcuts();
    closeModals();
  });

  $("accentInput").addEventListener("input", (e) => {
    state.accent = e.target.value;
    saveState();
    applyStyle();
  });

  $("bgInput").addEventListener("change", (e) => {
    const v = e.target.value.trim();
    state.bg = v ? `url('${v}')` : WALLPAPERS[0];
    saveState();
    applyStyle();
    fillSettings();
  });

  $("dashUrlInput").addEventListener("change", (e) => {
    state.dashUrl = e.target.value.trim() || DEFAULT_DASH;
    saveState();
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
    applyStyle();
    renderShortcuts();
    fillSettings();
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
  applyStyle();
  renderShortcuts();
  bind();
  tick();
  setInterval(tick, 1000);
  loadDashboard();
  setMode(state.showDash ? "dashboard" : "home");
}

start();

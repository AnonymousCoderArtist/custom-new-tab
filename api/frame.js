const DEFAULT_URL =
  "https://www.worldmonitor.app/dashboard?lat=20.0000&lon=0.0000&zoom=1.50&view=global&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2CcanadaAlerts%2Cwaterways%2Coutages%2Cmilitary%2Cnatural%2Cspaceports%2Csatellites";

function safeTarget(raw) {
  try {
    const u = new URL(raw || DEFAULT_URL);
    if (u.hostname !== "www.worldmonitor.app" && u.hostname !== "worldmonitor.app") {
      return null;
    }
    return u.toString();
  } catch {
    return null;
  }
}

function rewrite(html) {
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

async function fetchDashboard(target) {
  const res = await fetch(target, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    },
    redirect: "follow"
  });
  if (!res.ok) throw new Error("upstream " + res.status);
  const html = await res.text();
  return rewrite(html);
}

module.exports = async function handler(req, res) {
  const target = safeTarget((req.query && req.query.u) || DEFAULT_URL);
  if (!target) {
    res.statusCode = 400;
    res.setHeader("content-type", "text/plain");
    res.end("invalid url");
    return;
  }

  try {
    const html = await fetchDashboard(target);
    res.statusCode = 200;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.setHeader("cache-control", "public, max-age=60");
    res.end(html);
  } catch (err) {
    res.statusCode = 502;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end(
      `<!DOCTYPE html><html><body style="background:#070810;color:#fff;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><div style="text-align:center"><h2>Dashboard unavailable</h2><p style="opacity:.7">Could not load World Monitor right now.</p><p><a style="color:#3b82f6" href="${DEFAULT_URL}" target="_blank" rel="noopener">Open on worldmonitor.app</a></p></div></body></html>`
    );
  }
};

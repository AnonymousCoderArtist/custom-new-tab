const http = require("http");
const fs = require("fs");
const path = require("path");
const frame = require("./api/frame");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/api/frame") {
    req.query = Object.fromEntries(url.searchParams);
    frame(req, res);
    return;
  }

  let file = url.pathname === "/" ? "/index.html" : url.pathname;
  const full = path.join(__dirname, path.normalize(file));

  if (!full.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("forbidden");
    return;
  }

  fs.readFile(full, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    const ext = path.extname(full);
    res.writeHead(200, { "content-type": types[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});

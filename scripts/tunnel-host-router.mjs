#!/usr/bin/env node
/**
 * Temporary host router for the flowstarter-dev Cloudflare tunnel.
 * dmpresearch.flowstarter.dev → local Astro static site on :18191
 */
import http from 'node:http';

const LISTEN = Number(process.env.PORT || 5733);
const ROUTES = {
  'dmpresearch.flowstarter.dev': '127.0.0.1:18191',
};

const server = http.createServer((req, res) => {
  const host = String(req.headers.host || '')
    .toLowerCase()
    .split(':')[0];
  const target = ROUTES[host];

  if (!target) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(`No local upstream for ${host}\n`);
    return;
  }

  const [hostname, port] = target.split(':');
  const headers = { ...req.headers, host: target };

  const upstream = http.request(
    {
      hostname,
      port: Number(port),
      path: req.url,
      method: req.method,
      headers,
    },
    (upRes) => {
      res.writeHead(upRes.statusCode || 502, upRes.headers);
      upRes.pipe(res);
    },
  );

  upstream.on('error', (err) => {
    res.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(`Upstream error for ${host}: ${err.message}\n`);
  });

  req.pipe(upstream);
});

server.listen(LISTEN, '::', () => {
  console.log(`dmpresearch host router listening on [::]:${LISTEN}`);
});

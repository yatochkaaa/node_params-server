'use strict';
import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  console.log({ parts, query });

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const redis = require('redis');
const express = require('express');
const path = require('path');
const hostname = '0.0.0.0';
const port = 3000;

const client = redis.createClient({
  url: 'redis://redis:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

(async () => {
  await client.connect();
  const server = express();
  server.use(express.static(path.join(__dirname, 'frontend/src')));

  server.get('/api/visits', async (req, res) => {
    try {
      const visits = await client.incr('visits');
      res.json({ visits });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/src', 'index.html'));
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})();
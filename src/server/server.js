const redis = require('redis');
const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

const client = redis.createClient({
  url: 'redis://redis:6379'
});

client.on('error', err => console.log('Redis Client Error', err));
(async () => {
  await client.connect();
  
  const server = express();
  
  server.get('/', async (req, res) => {
    try {
      const visits = await client.incr('visits');
      res.send(`Number of visits: ${visits} to the project`);
    } catch (err) {
      res.status(500).send(`error: ${err}`);
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})();
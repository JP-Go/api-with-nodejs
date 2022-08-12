const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello my app');
    res.end();
  }
  if (req.url === '/about') {
    res.write('Hello my about page');
    res.end();
  }

  res.end('WROONG!');
});

server.listen(5000);

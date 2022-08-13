import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';

const server = createServer((_req, res) => {
  const fileStream = createReadStream('../resources/big.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (err) => {
    res.end(err);
  });
});

server.listen(5000);

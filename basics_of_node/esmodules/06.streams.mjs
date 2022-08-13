// Common streams (streams extends EventEmitter)
// Writeable: Write data in chuncks
// Readable: Read data in chuncks
// Duplex: Write and read data in chuncks
// Transform: Transform data while reading in chuncks

import { createReadStream } from 'node:fs';
const stream = new createReadStream('../reources/big.txt', {
  highWaterMark: 128 * 1024,
});

stream.on('data', (data) => {
  console.log(data);
});

stream.on('error', (err) => {
  console.error('Opps: We had an error!');
  console.error(err);
});

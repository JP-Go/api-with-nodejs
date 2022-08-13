const EventEmitter = require('events');

const emitter = new EventEmitter();

// React with callback on the response event
emitter.on('response', () => {
  console.log('Some data received');
});

emitter.emit('response');

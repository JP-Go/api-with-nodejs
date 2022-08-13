import EventEmitter from 'events';

const emitter = new EventEmitter();

// Http server is a event emitter
emitter.on('response', () => {
  console.log('Data comming');
});

emitter.emit('response');

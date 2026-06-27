const EventEmitter = require('events');

const emitter = new EventEmitter();

// // Registering a event Listener
// emitter.on('event1', () => {
//     console.log("An Event has occured");
// });

// emitter.emit('event1');

// emitter.on('event2', () => {
//     console.log("An Event has occured in event 1");
// });

// emitter.on('event2', () => {
//     console.log("An Event has occured in event 2");
// });

// emitter.emit('event2');

// // Removing a listener;
// emitter.on('event2', () => {
//     console.log("An Event has occured in event 1");
// });


// emitter.emit('event2');
// emitter.removeListener('event2');
// emitter.emit('event2');

// Error handling in event emitter:
emitter.on('event2', () => {
    console.log("An Event has occured in event 2");
});
emitter.on('error', (err) => {
    console.error('Error Event: ', err.message);
});

try {
    emitter.emit('event2');
    emitter.removeListener('event2');
    emitter.emit('event2');
} catch (error) {
    emitter.emit('error', error);
}


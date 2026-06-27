import EventEmitter from 'events';

const emitter = new EventEmitter();

// emitter.on("click", () => {
//     console.log("Button cliked");
// });

// emitter.on("hover", () => {
//     console.log("Mouse hovering"); 
// });

// emitter.emit("hover");
// emitter.emit("hover");
// emitter.emit("click");
// emitter.emit("hover");


// custom listener

class MyCustomEmitter extends EventEmitter {
    constructor () {
        super();
        this.greeting = 'Hello';
    }

    greet(name) {
        this.emit('greeting', `${this.greeting}, ${name}`);

    }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (input) => {
  console.log(`Greeting event`, input);
});

myCustomEmitter.greet("krish kumar");
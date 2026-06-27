setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Callback hell");
        }, 2000);
    }, 2000);
}, 2000);

function person(name, callbackFn) {
    console.log("Hello ", name);
    callbackFn();
}

function address() {
    console.log("address");
}

person("krish kumar", address);
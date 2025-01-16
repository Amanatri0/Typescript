"use strict";
function delayedCall(anotherFn) {
    setTimeout(() => anotherFn("Aman"), 2000);
}
function greet(name) {
    console.log(`Hello ${name}`);
}
delayedCall(greet);

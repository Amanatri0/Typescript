"use strict";
function sum(fn) {
    setTimeout(fn, 5000);
}
function fn() {
    console.log("Hello, World");
}
sum(fn);

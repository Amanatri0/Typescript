function sum(fn: () => void) {
  setTimeout(fn, 5000);
}

function fn() {
  console.log("Hello, World");
}
sum(fn);

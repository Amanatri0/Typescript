function delayedCall(anotherFn: (a: string) => void) {
  setTimeout(() => anotherFn("Aman"), 2000);
}

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

delayedCall(greet);

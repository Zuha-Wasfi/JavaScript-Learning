const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log("\n");

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

console.log("\n");

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // 23.9


const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3)); // 124


const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3)); // 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

console.log("\n");

// ++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(3)); // 1.7320508075688772
console.log(Math.pow(2, 3)); // 8
console.log(Math.min(3, 5, 23, 67, 1)); // 1
console.log(Math.max(45, 34, 3, 6, 55)); // 55

console.log("\n");

console.log(Math.random());
/*
The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.
*/
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*
Returns a pseudo-random number that's greater than or equal to min and less than max.
*/
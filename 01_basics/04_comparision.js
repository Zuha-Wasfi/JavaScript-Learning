console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

console.log("\n");

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log("\n");

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log("\n");

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

console.log("\n");

// strict equality (===)

console.log(1 === 1); // true
console.log("hello" === "hello"); // true
console.log("1" === 1); // false
console.log(0 === false); // false
/*
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result.
Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
*/
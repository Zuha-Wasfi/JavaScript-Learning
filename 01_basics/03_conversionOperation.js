let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0;
// "Zuha" => NaN

console.log("\n");

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Zuha" => true;

console.log("\n")

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

console.log("\n")

// ********************************* Operations ****************************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log("\n")

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 2 to the power 3 => 8
console.log(2/3); // 0.6666666666666666
console.log(2%3); // 2

console.log("\n")

let str1 = "hello"
let str2 = " zuha"

let str3 = str1 + str2
console.log(str3);

console.log("\n")

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32

console.log("\n")

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

console.log("\n")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

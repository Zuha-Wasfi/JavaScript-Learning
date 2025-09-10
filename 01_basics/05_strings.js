const name = "zuha"
const repoCount = 13

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log("\n");

const gameName = new String('zuha-wasfi')

console.log(gameName[0]); // z
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // ZUHA-WASFI
console.log(gameName.charAt(2)); // h
console.log(gameName.indexOf('h')); // 2

const newString = gameName.substring(0, 4)
console.log(newString); // zuha

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // ha

const newStringOne = "   zuha   "
console.log(newStringOne); //    zuha   
console.log(newStringOne.trim()); // zuha

const url = "https://abc.com/abc%20xyz"
console.log(url.replace('%20', '-')) // https://abc.com/abc-xyz
console.log(url.includes('abc')) // true
console.log(url.includes('cde')) // false

console.log(gameName.split('-')); // [ 'zuha', 'wasfi']
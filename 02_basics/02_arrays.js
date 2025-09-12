const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
const allHeros = [...marvel_heros, ...dc_heros]
console.log(allHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log("\n")

console.log(Array.isArray("Zuha")) // false
console.log(Array.from("Zuha")) // [ 'Z', 'u', 'h', 'a' ]
console.log(Array.from({name: "zuha"})) // []

console.log("\n")

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.isArray(score1, score2, score3)); // false
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
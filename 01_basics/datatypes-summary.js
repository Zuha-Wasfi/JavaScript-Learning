// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 345467467345354564n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Abc", "Xyz", "Cde"]; // Array

let myObj = {
    name: "hitesh",
    age: 22,
} // Objests

const myFunction = function(){
    console.log("Hello World");
} // Functions

console.log("\n")

// ++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "zuhawasfi"

let anotherName = myName
anotherName = "rammazsharfi"

console.log(myName);
console.log(anotherName);

console.log("\n")

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "zuha@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Zuha",
    [mySym]: "mykey1",
    age: 18,
    location: "BiharSharif",
    email: "zuha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // zuha@gmail.com
console.log(JsUser["email"]) // zuha@gmail.com
console.log(JsUser[mySym]) // mykey1

console.log("\n")

JsUser.email = "zuha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zuha@microsoft.com"
console.log(JsUser);

console.log("\n")

// Functions

console.log(JsUser.greeting); // undefined

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]

console.log(JsUser.greeting()); // Hello JS user // undefined
console.log(JsUser.greetingTwo()); // Hello JS user, Zuha // undefined
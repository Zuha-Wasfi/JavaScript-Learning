// const abcUser = new Object() // // Object Singleton

const abcUser = {} // // Non singleton

abcUser.id = "123abc"
abcUser.name = "Zuha"
abcUser.isLoggedIn = false

// console.log(abcUser); // { id: '123abc', name: 'Zuha', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "zuha",
            lastname: "wasfi"
        }
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'zuha', lastname: 'wasfi' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'zuha', lastname: 'wasfi' }

console.log("\n")

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 } // // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2) // // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log("\n")

const users = [
    {
        id: 1,
        email: "z@gmail.com"
    },
    {
        id: 1,
        email: "z@gmail.com"
    },
    {
        id: 1,
        email: "z@gmail.com"
    },
]

users[1].email
console.log(abcUser); // { id: '123abc', name: 'Zuha', isLoggedIn: false }

console.log(Object.keys(abcUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(abcUser)); // [ '123abc', 'Zuha', false ]
console.log(Object.entries(abcUser)); // [ [ 'id', '123abc' ], [ 'name', 'Zuha' ], [ 'isLoggedIn', false ] ]

console.log(abcUser.hasOwnProperty('isLoggedIn')); // true
console.log(abcUser.hasOwnProperty('isLogged')); // false

console.log("\n")

// de-structuring in Objects

const course = {
    coursename: "js learning",
    price: "999",
    courseInstructor: "xyz"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); // xyz

const {courseInstructor: instructor} = course
console.log(instructor); // xyz

// {
//     "name": "zuha",
//     "coursename": "js learning",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
// Dates

/*
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/

let myDate = new Date()
console.log(myDate); // 2025-09-10T18:10:26.687Z
console.log(myDate.toString()); // Wed Sep 10 2025 18:13:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Sep 10 2025
console.log(myDate.toISOString()); // 2025-09-10T18:13:50.659Z
console.log(myDate.toJSON()); // 2025-09-10T18:13:50.659Z
console.log(myDate.toLocaleDateString()); // 9/10/2025
console.log(myDate.toLocaleString()); // 9/10/2025, 6:13:50 PM
console.log(myDate.toLocaleTimeString()); // 6:13:50 PM

console.log("\n");

console.log(typeof myDate); // object

console.log("\n");

let myCreatedDate = new Date(2025, 0, 14)
console.log(myCreatedDate.toDateString()); // Fri Jan 14 2025

let myCreatedDate1 = new Date(2025, 0, 14, 5, 3)
console.log(myCreatedDate1.toLocaleString()); // 1/14/2025, 5:03:00 AM

// let myCreatedDate2 = new Date("2025-01-14")
let myCreatedDate2 = new Date("01-14-2025")
console.log(myCreatedDate2.toLocaleString()); // 1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1757533932157
console.log(myCreatedDate.getTime()); // 1736812800000
console.log(Date.now()); // 1757533985966


// to convert in seconds
console.log(Math.floor(Date.now()/1000)); // 1757534108

console.log("\n");

let newDate = new Date()
console.log(newDate); // 2025-09-10T19:56:35.492Z
console.log(newDate.getMonth() + 1); // 9
console.log(newDate.getDay()); // 3

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
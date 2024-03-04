// Primitive data types

//7 types : String, Number, Boolean, null, undefined, symbol,
//BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3423432423223432n

// Reference (Non primitive) data types

//Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name:"tarak",
//     age: 21,
// }

// let myfun = function(){
//     console.log("Hellow world");
// }

// console.log(typeof(myfun));

//*******************memmory in js*******************/

//Stack (primitive), Heap (Non-primitive)

// let youtubeName = "Investonomy"

// let anotherName = youtubeName
// anotherName = "Stock monck" 
// console.log(youtubeName);
// console.log(anotherName);

// let userOne = {
//     email: "user@google.com",
//     upi: "user@234"
// }

// let userTwo = userOne

// userTwo.email = "Chakraborty@2433.com"
// console.log(userOne.email);
// console.log(userTwo.email);

let classFive = {
    first: "Suman",
    second: "Bidisha",
    third: "Marry"
}

let classSix = classFive

classSix.second = "Rohan"

console.log(classFive);
console.log(classSix);
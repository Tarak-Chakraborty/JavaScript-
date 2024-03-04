// let myHeros = ["thor","spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.tarak = function(){
//     console.log(`tarak is present in all objects`);
// }

// Array.prototype.heyTarak = function(){
//     console.log(`Tarak says hi`);
// }

// heroPower.tarak()
// myHeros.tarak()

// myHeros.heyTarak()
// heroPower.heyTarak()



//Inheritance
// const user = {
//     name: "chai",
//     email: "cdsjnf@mail.com"
// }
// const Teacher = {
//     makeVideo: true,
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'js assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// //modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "chai aur code        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Tarak".trueLength()
"iceTea".trueLength()
// singleton
//object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Tarak",
    "full name": "Tarak Chakraborty",
    [mySym] : "myKey1",
    age: 21,
    location: "Bolpur",
    email: "Tarak43@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "babai@3453.com"
// Object.freeze(jsUser);
jsUser.email = "Kaninika@gamil.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hellow js User");
}

jsUser.greetingTwo = function () {
    console.log(`Hellow js user, ${this.name}`);
}

jsUser.greeting();
jsUser.greetingTwo();
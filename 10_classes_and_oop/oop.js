// const user = {
//     username: "Tarak",
//     logInCount: 8,
//     signdIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         //console.log(`username:${this.username}`);
//         console.log(this);
//     }
// }

// const user2 = {
//     username: "Tarak",
//     logInCount: 8,
//     signdIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         //console.log(`username:${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// // console.log(user.getUserDetails());

function User(username, logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    //by default it returns its value
    return this
}


/*when we use new keyword it generate 
a empty object it calls instance
step 1. create a empty object
step 2. call a constractor function because of new keyword
step 3. inject all the thing that store in this
step 4. we get all the thing that store in this
*/

const userOne = new User("tarak",12,true)
const userTwo = new User("babai",11,true)

console.log(userOne.constructor);
// console.log(userTwo);
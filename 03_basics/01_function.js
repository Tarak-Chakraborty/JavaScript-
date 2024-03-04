// function sayMyName(){
//     console.log("t");
//     console.log("a");
//     console.log("r");
//     console.log("a");
//     console.log("k");
// }

// sayMyName();

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }

// function addTwoNum(num1, num2){
//     // let result = num1 + num2
//     // return result
//     return num1 + num2

// }

// const result = addTwoNum(5 , 5)

// console.log("result:", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("tarak"));

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(100, 200, 300));

// const user = {
//     username: "tarak",
//     price: 199
// }

// function handleobject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleobject(user)

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function myArrayFunc(getArray) {
    return getArray[2]
}

console.log(myArrayFunc(myArray));
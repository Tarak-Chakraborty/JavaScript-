const userEmail = "t@1433.com"

if (userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}

// falsy values
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);
// for more information about Nullish coalsing operator use this link https://chat.openai.com/c/ba9d563a-d3b7-4f53-bfe7-ff532d484895

//Terniary Operator
 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
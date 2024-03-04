let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log(a);
    
}


console.log(a);
console.log(b);



function one(){
    const username = "Tarak"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website);

    two()
}

one()

if(true){
    const username = "Tarak"
    if(username === "Tarak"){
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);

// ****************interesting************** */

console.log(addone(5)); 
function addone(num){
    return num + 1
}



console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}


let var1 = "Non Modified"
console.log(var1);

function checkModified(param){
    return var1 = "Modified"
}

const storeModifiedValue = checkModified(var1)
console.log(storeModifiedValue);

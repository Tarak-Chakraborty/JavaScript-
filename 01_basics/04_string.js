const name = "tarak"
const repoCount = 50

// console.log(name + repoCount + "value");// outdated syntax

console.log(`hello my name is ${name} and my repo is${repoCount}`);

const gameName = new String('Tarak-chakraborty')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('T'));

// const newString = gameName.substring(0 ,4)
// console.log(newString);

// const anotherString = gameName.slice(0, 4) 
// console.log(anotherString);

const newStringOne = "    tarak     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Chakraborty.com/tarak%20chakraborty"

console.log(url.replace("%20", "-"));

url.includes("tarak")

console.log(url.includes('tarak'));

console.log(gameName.split('-'));
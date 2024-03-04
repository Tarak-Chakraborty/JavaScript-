const coding = ['js', 'ruby', 'java', 'python', 'c++']

// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item ,index, arr) => {
//     console.log(item , index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: 'js'
    },
    {
        languageName: "python",
        languagefileName: 'py'
    },
    {
        languageName: "Html",
        languagefileName: 'html'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})


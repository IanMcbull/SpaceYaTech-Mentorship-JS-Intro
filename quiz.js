// What two step process is followed by every web browser when it loads a web page?
// 1. Build the Page
// 2. Listen for Events

// How many primitive values in JS can you recall?
  // String
 // Null
// Boolean
// Symbol
// Undefined
// Number
// BigInt

// let firstName = "Ian"
// let isActive = true
// let signOne = Symbol("hi")
// let sighTwo = Symbol("hi")
// let notDefined = undefined
// let age = 70
// let biNum = 50n
// Is a string a primitive value?

// Is a number a primitive value?

// Is a boolean a primitive value?

// What is an object in JS
// Key value pairs

// What is a function in JS
let numOne = 89;
let numTwo = 90;
//numOne + numTwo



// Create a variable called first name 

// Create an array of names
let firstName =["Ian", "Eunice", "Davis"]
let numbers = [2,11,7]
// numbers[0]
// numbers[1]
let person ={
    firstName : "Eunice",
    lastName : "Kimani",
    names :["Sam", "Gip", "Simon"]
}
person.firstName
person.names[0]
// Create an object that has a first name and last name property and also has the array of names as a property


// Create a function that logs the first name from the person object to the console

function logFirstName() {
 return person.firstName
}
logFirstName()

function sumOfTwoNumbers(a,b){
    return a+b;
}
console.log(sumOfTwoNumbers(5,6))
// console.log("Ian")
// console.log(true)

function division(a,b){
    return a/b;
}
console.log(division(45,5))



// Create a function that takes in two arguments and returns their sum

// Create a function that returns another function

// Create an object called arithmetic that has a function called add that takes in two arguments and returns their sum

//console.log(document.getElementById("box_one"))
//console.log(document.getElementById("box_two"))
//console.log(document.getElementsByClassName("box_three"))
//console.log(document.getElementsByTagName("p"))

//console.log(document.querySelector(".box_three"))

// document.querySelector("#box_one").addEventListener("click",function(){
//     console.log("Box One has been clicked")
// })


document.querySelector(".box")
.addEventListener("click",function(){
    console.log("Box has been clicked")
})


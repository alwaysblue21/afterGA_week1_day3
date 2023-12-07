// primes //

// string
// anything inside "", '', or ``

// number
// examples: 1, 1.1, -1, -1.1, infinity, -infinity or NaN
// (lets keep things simple and just use the regulars numbers for now)

// boolean
// true or false

// null
let a = null
console.log(a)

// undefined
let b;
console.log(b)

/////////////////////////////////////////
//console log a string, number, boolean, null and undefined
console.log('hello world')
console.log(123)
console.log(false)
console.log(null)
console.log(undefined)

// variables
// A variable can be made up of letters, numbers and some characters (like _ and $). It cannot start with a number. It is capable of holding any kind of data.
// It is NOT wrapped in quotes - this is how JavaScript distinguishes a string (has quotes) versus a variable (no quotes)
// It must be declared using let or const. You can use var, but var is an older syntax.

let jemin = "jemin";
// let 1jemin = "1jemin"

let z;
let y = "y";
let x = 1;

// =========================================== //

let obj = {
    animal: "dog",
    name: "spike",
    age: 1,
    abilities: ["bubble blast", "lickem", "tackle"],
    ishuman: false,
}

console.log(
    obj.animal,
    obj["animal"]
)

// =========================================== //
// An array is represented with square brackets [] and each item is separated by commas.
// the elements have an order that starts with 0.
let arr = [1, 2, 3, 4, 5]

let arrTwo = [
    100,
    "hello world",
    false,
    null,
    { name: "spike"}
]

console.log(arrTwo[1])

// ============================================== //






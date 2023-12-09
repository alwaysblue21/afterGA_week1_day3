// basic for loop

for(let i=0; i<10; i++){
    console.log(i)
}

//starting at 0
//im going to 9
//and in my journey from 0 - 9
// im going to console.log(i)

for(let i=0; i<=10; i++){
    // console.log("going to annoy ",i, "time(s")
    // console.log(`going to annoy you ${i} times`)
    console.log("going to annoy " + i + " times")
}

//you do: give me a loop that starts at 1 and logs i 10 times.
for(let i = 1; i<11; i++){
    console.log(i)
}

// ============================================ //

for(let i=0; i<=10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// ============================================ //
let count = 0;
for(let i=0; i<=10; i++){
    if(i % 2 === 0){
        count = count + i
    }
} 

console.log("=")
console.log(count)

let countTwo = 0;
for(let i=0; i<=10; i++){
    // add i to the current value of countTwo
    countTwo = countTwo + i   
}
console.log(countTwo)
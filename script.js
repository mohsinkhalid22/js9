function myFunction() {
    console.log("Learning Functions");
    console.log("Day 9");
}
myFunction();



function myFunction(msg, n){
    // parameter -> input
    console.log(msg, n);
}
myFunction("I love JS", 100); //argument

//Function -> 2 numbers, sum 

function sum(x, y){
    s = x + y;
    console.log("before return");
    return s;
}
let val = sum(77,99);
console.log(val);

// Arrow Sum Function

const arrowSum = (a, b) => {
    console.log(a + b);
}

arrowSum(22,44);

// Multiply

const arrowMul = (a, b) => {
    console.log(a * b);
}

arrowMul(55,9);

// Practice

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}



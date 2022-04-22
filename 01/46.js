// Arrow Function 


// Normal function
const BirthdayWish = function(){
    console.log("Happy Birthday ...... 🥳🥳🥳🥳🥳🥳🥳🥳");
}
console.log(BirthdayWish());

// Arrow Function 
// example 1
const BirthdayWish1 = () =>{
    console.log("Happy Birthday ...... 🥳🥳🥳🥳🥳🥳🥳🥳");
}

console.log(BirthdayWish1());


// example2
const Addition = (num1,num2) =>{
    let sum = num1 + num2;
    return sum;
}

console.log(Addition(5,5));
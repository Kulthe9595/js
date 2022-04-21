// Nested if else 


// winning number 19
// 19 your guess is right 
// 17 too low
// 20 is high


let winningNumber  = 19;
let userGuess = +prompt("Guess the number");


if (userGuess === winningNumber){
    console.log("Your guess is right !!");
}else{
    console.log("Your guess is wrong !!");
    if(userGuess < winningNumber){
        console.log("To Low!!");
    }else{
        console.log("To High!!");
    }
}
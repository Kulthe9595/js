// Template String 

let age  = 22;
let firstName = "Shubham";

// expected output is  "my name is Shubham and my age is 22";

// methode 1 Regular method
// let aboutMe = "My name is " + firstName +" and My Age is "+ age +".";


// methode 2 templete String
// use `` backstrick.
let aboutMe = `My name is ${firstName} and My Age is ${age}.`;
console.log(aboutMe);
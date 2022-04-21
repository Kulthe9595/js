// typeof operator 

// data tyoe (premitive data type )

// string "shubham"
// number 2,3,5,6
// boolean  true false 
// undefined
// null
// BigInt 
// Symbol


// typeof  gives us data type of tha variable
// example
let age = 20;
let firstName = "Shubham";
console.log(typeof firstName);  //output is String 
console.log(typeof age);  //output is number


// convert  number to String 
age = age+"";
console.log(typeof(age)); //String


// convert String to number
let myStr = "35";
console.log(typeof(myStr));  // output is String 

myStr = +"35";
console.log(typeof(myStr));  // output is number 



// Alternate to conver String to number
let rahulAge = "19";
rahulAge = Number(rahulAge);
console.log("Rahule Age variable type is :",typeof(rahulAge)); 
console.log("Rahul Age is ",rahulAge);


// Alternate to conver number to String
let AdiAge = 19;
AdiAge = String(AdiAge);
console.log("Adi Age variable type is :",typeof(AdiAge)); 
console.log("Adi Age is ",AdiAge);


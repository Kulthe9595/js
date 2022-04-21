// trim(),toUpperCase(),toLowerCase(),Slice

let firstName = "     Shubham    ";


console.log(firstName);  //      Shubham    

console.log(firstName.length); //output is 16

firstName = firstName.trim();  //"Shubham"
console.log(firstName.length); //output is 7

firstName = firstName.toUpperCase(); // "SHUBHAM"
firstName = firstName.toLowerCase(); // "shubham"


// slice (start index,end index);   
// slice start with 0 index
firstName = firstName.slice(0,3); // "shu"
console.log(firstName); 


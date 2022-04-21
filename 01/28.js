// premitive vs reference variable

let num1 = 6;
let num2 = num1;

console.log("Value of num1 is ",num1);
console.log("Value of num2 is ",num2);

num1++;
console.log("After Increamenting Num1");
console.log("Value of num1 is ",num1);
console.log("Value of num2 is ",num2);


// reference type
// array
let array1 = ["item1","item2"];
let array2 = array1;
console.log("Value of Array1 is ",array1);
console.log("Value of Array2 is ",array2);

array1.push("item3");
console.log("After Push into array")
console.log("Value of Array1 is ",array1);
console.log("Value of Array2 is ",array2);
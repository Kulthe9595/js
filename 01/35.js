// array destructuring

const myArray = ["item1","item2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("Value of myvar1 is :",myvar1);
// console.log("Value of myvar2 is :",myvar2);


let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);



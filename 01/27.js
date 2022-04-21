// array push 

let fruits  = ["apple","mango","grapes"];

fruits.push("banana");
console.log(fruits);
fruits.push("xyz");
console.log(fruits);
console.log("-----------------------------------------------");

// array pop
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log("-----------------------------------------------");

// unshift
// start new element at starting
fruits.unshift("Bananan");
console.log(fruits);
console.log("-----------------------------------------------");

// shift
// Remove start element
fruits.shift();
console.log(fruits);
console.log("-----------------------------------------------");

// push and pop is fast than shift and unshift

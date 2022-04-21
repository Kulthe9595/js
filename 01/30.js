//for loop in array
let fruits  = ["apple","mango","grapes"];
let fruits2 = [];
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
    console.log(fruits2[i]);
}

console.log(fruits);
console.log(fruits2);

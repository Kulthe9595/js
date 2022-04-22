// spread operator

const myArray1 = [1,2,3];
const myArray2 = [4,5,6];

// const newArray = [...myArray1,...myArray2];
// console.log(newArray);  // output : [1, 2, 3, 4, 5, 6]


const newArray = [..."abc"];
console.log(newArray);  // output : ['a', 'b', 'c']

// spread operator in object
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4"
};


// const newObj = {...obj1,...obj2,key5:"value5"};
const newObj = {..."abc"};
console.log(newObj);

// diffrence between dot and bracket notation

const key = "email";
const person = {
    name :"rahul",
    age : 10,
    "person hobbies":['guitar','sleeping','listening music']
};
console.log(person.age);
console.log(person["person hobbies"]);


// how to add any var value as key in object
person[key] = "kulthe9595@gmail.com";
console.log(person);
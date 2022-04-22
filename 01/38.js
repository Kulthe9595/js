// how to iterate object


const person = {
    name :"rahul",
    age : 10,
    "person hobbies":['guitar','sleeping','listening music']
};


// for in loop

// for(let key in person){
//     console.log(`${key}:${person[key]}`);
// }

// object.key
console.log(Object.keys(person));
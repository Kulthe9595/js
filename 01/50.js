// block scope function scope

// let and const are block scope
// var is function scope


{
    let firstName =  "Shubham";
    const lastName  = "Kulthe";
    console.log(lastName); // Kulthe 
}

// console.log(firstName);  //50.js:11 Uncaught ReferenceError: firstName is not defined at 50.js:11:13
// console.log(lastName); //Uncaught ReferenceError: lastName is not defined



// because if let and const varibale is in any block we cant accest it outside of that block;

{
    var contact = 9595838283;
}

console.log(contact); // 9595838283s


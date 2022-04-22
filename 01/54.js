// call back Function

function myFunc2(name){
    console.log("Inside My Function 2");
    console.log(`My Name is ${name}`);
}

function myFunc(callback){
    console.log("My Name is MyFunc");
    // callback();
    callback("Shubham");
}


myFunc(myFunc2);




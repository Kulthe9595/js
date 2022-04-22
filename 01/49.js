// lexical scope

function myApp(){
    let myVar  = "value1";
    function myFunc(){
        let myVar  = "value2";
        console.log("inside myFunc",myVar)
    }
    const myFunc2 = function(){}
    const myFunc3 = () => {}
    
    console.log(myVar);
    myFunc();
}

myApp();
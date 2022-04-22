// function inside function 
 
const app = () => {
    const myFunc = () => {
        console.log("Hello form myfunc");
    }
    const addtition = (num1,num2) => {
        return num1 + num2;
        
    }
    const mutiplication = (num1,num2) => {
        return num1 * num2;
        
    }
    const division = (num1,num2) => {
        return num1 / num2;
        
    }


    console.log("inside app");

    // calling function inside function
    console.log(myFunc(5,5));
    console.log(addtition(5,5));
    console.log(mutiplication(5,5));
    console.log(division(5,5));


}

// calling main function
app();
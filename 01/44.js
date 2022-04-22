
// function declaration

function HappayBirthdayWish(){
    console.log("Happy Birthday ...... 🥳🥳🥳🥳🥳🥳🥳🥳");
}


HappayBirthdayWish()


function Addition(num1,num2){
    let sum = num1 + num2;
    return sum;
}

let result  = Addition(5,5);
console.log(result);



function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
        return i;
        }
    }
    
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 8);
console.log(ans);
    
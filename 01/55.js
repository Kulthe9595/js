// function returing funtion

// function myFunc(){
//     function hello(){
//        return "Hello Word";
//     }
//     return hello;
// }

function myFunc(){
    return function (){
       return "Hello Word";
    }
}

const ans = myFunc();
console.log(ans());

    
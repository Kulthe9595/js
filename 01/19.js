// switch case 

let userValue = +prompt("Enter 0-7");

switch(userValue){
    case 1:
        alert("Today is sunday");
        break;
    case 2:
        alert("Today is monday");
        break;
    case 3:
        alert("Today is tue");
        break;
    case 4:
        alert("Today is wed");
        break;
    case 5:
        alert("Today is thu");
        break;
    case 6:
        alert("Today is fir");
        break;
    case 7:
        alert("Today is sat");
        break;
    default:
        alert("Invalid day");
        break;
}
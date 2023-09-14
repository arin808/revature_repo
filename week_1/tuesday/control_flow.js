// Control flow

// if
const age = 18;
if (age >= 18) {
    console.log('You can drive');
}

// else if
const temp = 25;
if(temp < 0){
    console.log("Freezing");
}else if (temp >= 0 && temp < 20){
    console.log("Cold");
}else{
    console.log("Warm");
}

// ternary operators
const message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

// switch
const day = "Wednesday";
switch(day){
    case "Monday":
        console.log("It is the first day of the week");
        break;
    case "Wednesday":
        console.log("It is Wednesday my dudes");
        break;
    case "Friday":
        console.log("It is the last day of the week");
        break;
    default:
        console.log("Its just a day");
}

// for, while, do while loops

// initialize, condition, iterator
for(let i = 0; i < 5; i++){
    console.log(i);
}

// while
let count = 0;
while(count < 5){
    console.log(count); // outputs numbers 0 to 4
    count++;
}

// do while
// essentially the same as while, except the code block is executed at least once
let count2 = 7;

do{
    console.log(count2);;
    count2++;
}while(count2 < 5);

// loop controle statements

// break and continue
// break; terminates the loop prematurely usually based on a condition
// continue; skips the current iteration of the loop based on a condition
console.log("==============================")

for(let i = 0; i < 6; i++){
    if(i === 2){
        continue;
    }
    console.log(i);
}
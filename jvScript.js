//gives a message when entering the site
//alert("Hello world");
//message that appears in the console
//console.log("Hello world");
//question to the user, then click yes or no
//confirm("Are you sure to continue?: ");
//requests data from the user
//prompt("Type your name: ");


/*var age=prompt("Type your age: ");

if(age>18){
    alert("Is an adult");
}
else{
    alert("Is underage");
}*/
/*const pi=3.131592;

var radius=prompt("insert the radius");

var volume=(4/3)*(pi)*(radius**3);

alert(volume);*/

/*var number=prompt("Type a number: ");

if (number < 0){
    alert("this number is negative");
}
else if (number > 0){
    alert("this number is positive");
}
else{
    alert("this number is 0");
}*/

/*var score=prompt("Type you grade score: ");
if (score >= 70){
    alert("You passed.");
}
else{
    alert("You failed.");
}*/
/*var tax=0.12;
var discountValue=0;

var consumption=prompt("please type how much you have consumed in money ");
if (consumption > 0 || consumption <= 100){
    discountValue=0.1;
    var discountValueAsPrice=consumption*discountValue;
    var taxValueAsPrice=consumption*tax;
    var totalExpenses=(consumption-discountValueAsPrice)+taxValueAsPrice;
    alert("your discount is: "+discountValue);
    alert("The tax value is: "+tax);
    alert("your total expenses is: "+totalExpenses);
}

else if (consumption > 100){
    discountValue=0.2;
    var discountValueAsPrice=consumption*discountValue;
    var taxValueAsPrice=consumption*tax;
    var totalExpenses=(consumption-discountValueAsPrice)+taxValueAsPrice;
    alert("your discount is: "+discountValue);
    alert("The tax value is: "+tax);
    alert("your total expenses is: "+totalExpenses);
}*/
/*var limit=prompt("Digit the limit of prints: ");
let number=2;
for(let i=0;i<limit;i++){
    console.log(i);
    alert(number);
    number=number+1;
}*/
/*let i=0;
var limit=prompt("digit the limit: ");
for(i=2;i<=limit;i++){
    console.log(i);
    alert(i);
}*/
//The i variable
/*let i=0;
//The limit
var userLimit=prompt("digit the limit: ");
//The number that will be increasing 
let numberPrinted=3;
//The loop
//I could do it as i=3 and adding 3 each time, but I think it is a bit misleading to the user
/*
for(i=3;i<userLimit;i=i+3){
    alert(i);
    console.log(i)
}*/
/*
for(i=0;i<userLimit;i++){
    alert(numberPrinted);
    console.log(numberPrinted)
    numberPrinted=numberPrinted+3;
}*/
function guessNumber(number, random) {
    //condition to evaluate if the guessed number is between 0 and 100
    if (number >= 0 && number <= 100) {
        if (number == random) {
            document.getElementById("answer").innerHTML = "Congratulations! This is the number!";
        }
        else {
            document.getElementById("answer").innerHTML = "It is not the number. Try again.";
        }
    }
    else {
        document.getElementById("answer").innerHTML = "Please, type a valid number."
    }
}

function sendEmail() {
    document.getElementById("emailsuccess").innerHTML="Thanks for confirming your Email"
}
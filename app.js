function automaticEngine(){
    console.log('"I think I can... I think I can..."');
}
automaticEngine();

// Intended to gather the first letter of user's name
var response;
var promptQuestion = "What letter does your first name start with?"; 
function learnLetter(){
    response = prompt(promptQuestion);
    response = response.toLowerCase();
    if(response === "a") alert("Nice, dude.");
    else if(response === "b") alert("I mean...");
    else if(response === "m") alert("Beauful :)");
    else learnLetter();
    console.log(response);
}
learnLetter();

var order;
function orderUp(){
    order = "black coffee";
    console.log("Your order of " + order + " is ready");
}
orderUp();

function howHungry(){
    for (var i = 0; i < 10; i++)
        console.log(i);
}
howHungry();

var promptQuestion = "How many cabbage would you like?";
function manyFood(){
    hunger = prompt(promptQuestion);
    for (var hunger = 0; hunger < (hunger); hunger++) {
    document.createElement(<section class= "card-1">);
}
manyFood(hunger);
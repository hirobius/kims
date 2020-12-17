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

function counter(){
    for (var i = 0; i < 10; i++)
        console.log(i);
}
counter();

function hunger(message) {
    var hunger = prompt(message);
    return hunger;
}

var hunger = prompt("How much cabbage would you like?");
var imgKim = "https://www.thefooddictator.com/wp-content/uploads/2015/12/image2.jpeg";

for (var i = 0; i < hunger; i++) {
    document.write(imgKim);
}
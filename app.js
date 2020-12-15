// Note
function automatic(){
    console.log("I think I can.");
}

automatic();

// Note
var response;

function getUserPrompt() {
    var promptQuestion = "What letter does your first name start with?"; 
    response = prompt(promptQuestion);
    response = response.toLowerCase();
    console.log(response);
}   if (response === "a") {
    alert("Nice, dude.");
} else if (response === "b") {
    alert("I mean...");
} else if (response === "m") {
    alert("Beauful :)");
} else {
    alert("That's too bad...");
}

getUserPrompt();

// Note
var order;

function orderUp() {
    order = "black coffee";
    console.log("Your order of " + order + " is ready");
}

orderUp();

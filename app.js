function automaticEngine(){
    console.log('"I think I can... I think I can..."');
}
automaticEngine();

// Intended to gather the first letter of user's name
var response;
var promptQuestion = "Riddle: What letter does the first name start with?"; 

function learnLetter(){
    var shouldIKeepLooping = true;
    do {
        response = prompt(promptQuestion);
        response = response.toLowerCase();
        if(response === "a") {
            alert("Nice, dude.");
            shouldIKeepLooping = false;
        } else if(response === "b") {
            alert("I mean...");
            shouldIKeepLooping = false;
        } else if(response === "m") {
            alert("Beauful :)"); 
            shouldIKeepLooping = false;
        } else {
            alert("Please Try Again. \r\n \r\nRiddle: What letter does the first name start with?");
        }
    } while (shouldIKeepLooping);
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
var imgKim = '<section class= "card-1">' +
                    '<ul>' +
                        '<h2><a href="#">Heading</a></h2>' +
                            '<img src="https://www.thefooddictator.com/wp-content/uploads/2015/12/image2.jpeg">' +
                    '</ul>' +
                '</section>';

    for (var i = 0; i < hunger; i++) {
        document.write(imgKim);
}
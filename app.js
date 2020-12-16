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

function makeFood(){
   
}

var hunger = prompt("How many cabbage would you like?");
for (var makeFood = 0; makeFood < hunger; makeFood++) {
    document.write("<section class= "card-1">
                    <ul>
                        <li>
                            <h2><a href="#">Heading</a></h2>
                                <img src="https://www.thefooddictator.com/wp-content/uploads/2015/12/image2.jpeg">
                        </li>
                    </ul>
                </section>");
}


if(response === "a") alert("Nice, dude.");
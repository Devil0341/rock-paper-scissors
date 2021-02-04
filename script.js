//Prompt user for r,p or s and store results in variable
//Randomly generate computer guess of r,p or s 
//display computer guess to user (ie window alert)
//compare computer w/user guess & display to user
//display stats to user
///confirm to user play again or not
//play again equals yes- start over

//Declared a global variable for user to store the input value ,r,p,s
var options = ["r", "p", "s"]


//created a function game//
function game(){
    //inside the game function a window prompt tells the user to input a r,p or s to play the game. The input is stored in variable rps
    var rps=window.prompt("Let's play rock, paper, scissors, enter r,p, or s");

    //Declared a variable computerChoiceIndex to chose a random number using math.floor to keep intergers, math.random to choose a any number between 0.0-1, multiplied by the global variable array(array.length is options.length here)
    var computerChoiceIndex = Math.floor(Math.random() * options.length) 
    
    //By declaring a variable computerChoice to Take the computers random number from computerChoiceIndex and selecting a value from the global array var options = ["r", "p", "s"]

    var computerChoice = options[computerChoiceIndex];
    //console is logging the user value and the computers value
    console.log(rps, computerChoice)
    
    //need if statements conditionals
}

game();





//-----------------
// window.alert("Do you want play Rock, Paper or Scissor!");
// alert("Enter r, p, or s");

// var game=[]
// var computerGuess = []

// Math.random(computerGuess)







// //--------------
// if (window.confirm("Do you really want to leave?")) {
//     window.open("exit.html", "Thanks for Visiting!");
//   }

//   //-------------------
//   result = window.prompt(message, default);

//   //
//   Math.random()
//Prompt user for r,p or s and store results in variable
//Randomly generate computer guess of r,p or s 
//display computer guess to user (ie window alert)
//compare computer w/user guess & display to user
//display stats to user
///confirm to user play again or not
//play again equals yes- start over

//---My code---
//Declared a global variable for computer to store the input value ,r,p,s
var options = ['r', 'p', 's'];
var wins = 0;
var losses = 0;
var ties = 0;

//created a function game//
function game(){
    //inside the game function a window prompt tells the user to input a r,p or s to play the game. The input is stored in variable rps
    var rps=window.prompt("Let's play rock, paper, scissors, enter r,p, or s");

    //Declared a variable computerChoiceIndex to chose a random number using math.floor to keep intergers, math.random to choose a any number between 0.0-1, multiplied by the global variable array(array.length is options.length here)
    var computerChoiceIndex = Math.floor(Math.random() * options.length);
    
    //By declaring a variable computerChoice to Take the computers random number from computerChoiceIndex and selecting a value from the global array var options = ["r", "p", "s"]

    var computerChoice = options[computerChoiceIndex];
    //console is logging the user value and the computers value
    console.log(rps, computerChoice)
    
     //window alert of computers guess display to user
    window.alert("Your opponent's choice is, " + computerChoice)

//The logic------   
if (computerChoice === rps){
    ties++//is ties+1
    window.alert('You have tied! Try again.');
}else if((rps === 'r' && computerChoice ==='s')||
         (rps ==='s' && computerChoice === 'p')||
         (rps === 'p' && computerChoice ==='r')
) {
    wins++;//adds 1 to wins variable
    window.alert('You Win!');
} else {
    losses++;//adds 1 to losses variable
    window.alert('You Lost!')
}
//print stats with line breaks
window.alert('Stats:\nWins:' +wins + '\nLosses:' + losses +'\nTies:' + ties);

//ask user to play again
var isPlayAgain = window.confirm('Play again?');

//if yes, its a true statement then game function gets rerun all over again
if (isPlayAgain){
    game();
}
}//end of the function block

game();

//why do we initiate the game to play again within the function block and not on the outside?
//What are the checks for error handling the values or strings? 

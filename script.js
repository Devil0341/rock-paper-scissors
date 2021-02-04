//Prompt user for r,p or s and store results in variable
//Randomly generate computer guess of r,p or s 
//display computer guess to user (ie window alert)
//compare computer w/user guess & display to user
//display stats to user
///confirm to user play again or not
//play again equals yes- start over

//Declared a global variable for user to store the input value ,r,p,s
var options = ['r', 'p', 's']
var userScore= []
var computerScore=[]



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
//-----------------------------------------------------
    //if statements conditionals--this is repetitive
    if (computerChoice === 'r' && rps === 's'){
        window.alert('You have lost! Rock smashes scissors, Try again.')
        computerScore +=1
    }
     if (computerChoice === 'r' && rps === 'r'){
     window.alert('You have tied! Try again.')
        // computerScore += 0
        // userScore += 0
     }
     if (computerChoice ==='r' && rps === 'p'){
         window.alert('Congradulations! Paper beats rock, you have won!')
         userScore +=1
     }
     if (computerChoice === 's' && rps === 'r'){
         window.alert('Congradulations! Rock smashed scissors you have won!')
         userScore +=1
     }
     if (computerChoice === 's' && rps === 's'){
         window.alert('You have tied.')
     }
     if (computerChoice === 's' && rps === 'p'){
         window.alert('You have lost! Scissors eats paper')
         computerScore +=1
     }
     if (computerChoice === 'p' && rps === 's'){
         window.alert('Congradulations! Scissors eats paper, you have won!')
         userScore +=1
     }
    if (computerChoice ==='p' && rps ==='p'){
        window.alert('You have tied.')
     }
     if (computerChoice === 'p' && rps ==='r'){
         window.alert('You have lost! Paper covers rock')
     }
     --------------------   
     var stats = {
            Wins; 
        }
     window.alert('Your score is ' + userScore[i] + 'Computer score is '+ computerScore[i])
}

game();



 //--------------
// if (window.confirm("Do you really want to leave?")) {
//     window.open("exit.html", "Thanks for Visiting!");
//   }

//   //-------------------
//   result = window.prompt(message, default);

//   //
//   Math.random()
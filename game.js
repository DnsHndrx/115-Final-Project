
var playerChoice = "rock";
var aiChoice = null;

var aiOptions = [ "rock",
"paper",
"scissors"];

var icon = document.querySelectorAll('i');
var p = document.getElementById("message")

if (aiOptions[index] == "rock" && playerChoice == "paper") {
    aiChoice = "Yes! You won! " + aiOptions[index], + playerChoice;
}
if (aiOptions[index] == "paper" && playerChoice == "scissors") {
    aiChoice = "Yes! You won! " + aiOptions[index], + playerChoice;
}
if (aiOptions[index] == "scissors" && playerChoice == "rock") {
    aiChoice = "Yes! You won! " + aiOptions[index], + playerChoice;
} 
if (aiOptions[index] == "scissors" && playerChoice == "paper") {
    aiChoice = "Sorry. You lose " + aiOptions[index], + playerChoice;
}
if (aiOptions[index] == "paper" && playerChoice == "rock") {
    aiChoice = "Sorry. You lose " + aiOptions[index], + playerChoice;
}
if (aiOptions[index] == "rock" && playerChoice == "scissors") {
    aiChoice = "Yes! You won! " + aiOptions[index], + playerChoice;
}
if (aiOptions[index] == "rock" && playerChoice == "rock") {
    aiChoice = "its a draw " + aiOptions[index], + playerChoice;
}
if (aiOptions[index] == "paper" && playerChoice == "paper") {
    aiChoice = "its a draw " + aiOptions[index], + playerChoice;

function playerChooses(element){
    if(element.matches('.clicked.rock')){
        playerChoice = 'rock';
        console.log('this is rock move')
    } else if(element.matches('.clicked.paper')){
        playerChoice = 'paper'
        console.log('this is paper move')
    } else {
        playerChoice = 'scissors'
        console.log('this is scissors move')
    }
}

console.log(playerChoice)

function changeColor(element){
    element.classList.add('clicked')
    for(let i = 0; i < 3; i++){
        if(icon[i].classList.contains('clicked') == false){
            icon[i].style.visibility = 'hidden'
        }
    }
}}

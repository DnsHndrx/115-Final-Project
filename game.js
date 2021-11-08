var playerChoice = "rock";
var aiChoice = null;

var aiOptions = [ "rock",
"paper",
"scissors"];

var index = Math.floor(Math.random() * aiOptions.length);

if (aiOptions[index] == "rock" && playerChoice == "paper") {
    aiChoice = "Yes! You won! " + aiOptions[index] + playerChoice;
}
if (aiOptions[index] == "paper" && playerChoice == "scissors") {
    aiChoice = "Yes! You won! " + aiOptions[index] + playerChoice;
}
if (aiOptions[index] == "scissors" && playerChoice == "rock") {
    aiChoice = "Yes! You won! " + aiOptions[index] + playerChoice;
} 
if (aiOptions[index] == "scissors" && playerChoice == "paper") {
    aiChoice = "Sorry. You lose " + aiOptions[index] + playerChoice;
}
if (aiOptions[index] == "paper" && playerChoice == "rock") {
    aiChoice = "Sorry. You lose " + aiOptions[index] + playerChoice;
}
if (aiOptions[index] == "rock" && playerChoice == "rock") {
    aiChoice = "its a draw " + aiOptions[index] + playerChoice;
}
if (aiOptions[index] == "paper" && playerChoice == "paper") {
    aiChoice = "its a draw " + aiOptions[index] + playerChoice;
}
if (aiOptions[index] == "scissors" && playerChoice == "scissors") {
    aiChoice = "its a draw " + aiOptions[index] + playerChoice;
} 

alert(aiChoice)

var icon = document.querySelectorAll('i');

function changeColor(element){
    element.classList.add('clicked')
    for(let i = 0; i < 3; i++){
        if(icon[i].classList.contains('clicked') == false){
            icon[i].style.visibility = 'hidden'
        }
    }
}

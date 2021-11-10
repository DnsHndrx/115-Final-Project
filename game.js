var playerChoice = null;
var aiChoice = null;

var aiOptions = [ "rock",
"paper",
"scissors"];

var icon = document.querySelectorAll('i');
var p = document.getElementById("message")

var index = Math.floor(Math.random() * aiOptions.length);

function play(){
    if(playerChoice !== null){
    for(let i = 3; i < 6; i++){
        if(icon[i].classList.contains(aiOptions[index]) == false){
            icon[i].style.visibility = 'hidden'
        }
    }
    if (aiOptions[index] == "rock" && playerChoice == "paper") {
        aiChoice = `Yes, ${playerChoice} wins!`;
    }
    if (aiOptions[index] == "paper" && playerChoice == "scissors") {
        aiChoice = `Yes, ${playerChoice} wins!`;
    }
    if (aiOptions[index] == "scissors" && playerChoice == "rock") {
        aiChoice = `Yes, ${playerChoice} wins!`;
    } 
    if (aiOptions[index] == "scissors" && playerChoice == "paper") {
        aiChoice = `Sorry, ${playerChoice} loses.`;
    }
    if (aiOptions[index] == "paper" && playerChoice == "rock") {
        aiChoice = `Sorry, ${playerChoice} loses.`;
    }
    if (aiOptions[index] == "rock" && playerChoice == "rock") {
        aiChoice = `It's a draw.`;
    }
    if (aiOptions[index] == "paper" && playerChoice == "paper") {
        aiChoice = `It's a draw.`;
    }
    if (aiOptions[index] == "scissors" && playerChoice == "scissors") {
        aiChoice = `It's a draw.`;
    }
    if (aiOptions[index] == "rock" && playerChoice == "scissors") {
        aiChoice = `Sorry, ${playerChoice} loses.`;
    }
} else {
    aiChoice = "No move selected, Please retry."
}
    // display message
    p.innerHTML = aiChoice
    
}

//validate players move
function playerChooses(element){
    if(element.matches('.clicked.rock')){
        playerChoice = 'rock';
    } else if(element.matches('.clicked.paper')){
        playerChoice = 'paper'
    } else if(element.matches('.clicked.scissors')) {
        playerChoice = 'scissors'
    }
}

//show only users move
function changeColor(element){
    element.classList.add('clicked')
    for(let i = 0; i < 3; i++){
        if(icon[i].classList.contains('clicked') == false){
            icon[i].style.visibility = 'hidden'
        }
    }
}

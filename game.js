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

var icon1 = document.getElementsByTagName("i")[0];
var icon2 = document.getElementsByTagName("i")[1];
var icon3 = document.getElementsByTagName("i")[2];

icon1.addEventListener("click",function(){
     icon1.classList.toggle("clicked")
});

icon2.addEventListener("click",function(){
    icon2.classList.toggle("clicked")
});

icon3.addEventListener("click",function(){
    icon3.classList.toggle("clicked")
});

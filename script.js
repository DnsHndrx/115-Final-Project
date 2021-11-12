const statusDisplay = document.querySelector('.game--status');

let player_one = document.getElementsByClassName('players')[0]
let player_two = document.getElementsByClassName('players')[1]
let namesBtn = document.getElementsByClassName('names')[0]

let count = localStorage.tic_tac_counter



let gameActive = true;

let currentPlayer= '';

namesBtn.addEventListener('click', function(){
    currentPlayer = player_one.value
    statusDisplay.innerHTML = currentPlayerTurn();
})

let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
 
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    if(currentPlayer == player_one.value){
        gameState[clickedCellIndex] = "X";
        clickedCell.innerHTML = "X";
    } else if (currentPlayer == player_two.value){
        gameState[clickedCellIndex] = "O";
        clickedCell.innerHTML = "O";
    }
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        // add win counter
        if(statusDisplay.innerHTML.includes(player_one.value) == true){
            localStorage.tic_tac_counter = eval(`${count} + 1`)
        }
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === player_one.value ? player_two.value : player_one.value;
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = player_one.value;
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}

function myFunction() {
    var p = document.getElementsByClassName('cell')
    p.style.textDecoration = 'line-through';
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

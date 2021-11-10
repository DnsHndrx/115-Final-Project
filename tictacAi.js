Dns.Hndrx
#0503

Dns.Hndrx — 11/04/2021
<html>
  <hr>

  <style>
     hr {
        transform: rotate(90deg);
     }
  </style>
</html>
Dns.Hndrx — 11/05/2021
html
<html>
    <head>
        <title>Main Page</title>
        <link rel="stylesheet" href="mainpage.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Expand
message.txt
3 KB
/* Inputs /
let budget = document.getElementById('budget')
let expenses_title = document.getElementById('expenses_title')
let expenses_amount = document.getElementById('expenses_amount')
/ Display /
let budget_amount = document.getElementById('budget_amount')
let balance = document.getElementById("final_balance")
let expenses_total = document.getElementById('expenses_total')
let title = document.getElementById('title')
let expense_value = document.getElementById('expense_value')

function calc(){
  / Set Display Values */
    budget_amount.innerHTML = "$ " + budget.value
    expenses_total.innerHTML = "$ " + expenses_amount.value
    title.innerHTML = expenses_title.value
    let final_balance = budget.value - expenses_amount.value
    balance.innerHTML = "$ " + final_balance
    expense_value.innerHTML = "$ " + expenses_amount.value
}
Dns.Hndrx — 11/08/2021
https://icons8.com/icons/share-collections/MHPUKSLgq8fd
Download free icons, music, stock photos, vectors
Designers, download the design stuff for free — icons, photos, UX illustrations, and music for your videos.
Image
Dns.Hndrx — 11/08/2021
square root
Justice Kipp — 11/08/2021
pretty sure its "v thing"
also thanks
Dns.Hndrx — 11/08/2021
definitely
Justice Kipp — 11/08/2021
that was embarsing
i spelled that wrong
Dns.Hndrx — 11/08/2021
im watching captain america: the first avenger
Justice Kipp — 11/08/2021
Hot take: worst marvel movie
Dns.Hndrx — 11/08/2021
its the first one im watching
Justice Kipp — 11/08/2021
Yeah the first one is so boring
Dns.Hndrx — 11/08/2021
so i dont exactly have an opinion
i like it so far
Justice Kipp — 11/08/2021
Oh you haven't seen it yet?
Dns.Hndrx — 11/08/2021
nope I never watched marvel movies
Justice Kipp — 11/08/2021
Okay I will refrain from giving my options on the movie until finished it
Dns.Hndrx — 11/08/2021
lol you suck at spelling
Justice Kipp — 11/08/2021
I don't think I like your tone right now
Dns.Hndrx — 11/08/2021
ok dad
Justice Kipp — 11/08/2021
Also I want to watch the good ones with you since you have not seen them
Dns.Hndrx — 11/08/2021
which ones are the "good" ones
Justice Kipp — 11/08/2021
Basically all of them except for the Captain American movies and the first spider man. They are still good movies but I don't enjoy them as much as the others
Dns.Hndrx — 11/08/2021
i can bring in some of the movies on DVD
Justice Kipp — 11/08/2021
most, if not all of them, are on Disney plus
Dns.Hndrx — 11/08/2021
I dont have Disney plus on my computer
Justice Kipp — 11/08/2021
DVD it is
are you watching them in any order or just at random
Dns.Hndrx — 11/08/2021
chronological
Justice Kipp — 11/08/2021
sweet
Dns.Hndrx — 11/08/2021
Iron Man, The Incredible Hulk, or the first Spiderman movie
Justice Kipp — 11/08/2021
Which one do I want to watch?
Dns.Hndrx — 11/08/2021
yeah
Justice Kipp — 11/08/2021
Which spider man are you talking about because homecoming is the first official marvel spider man
Dns.Hndrx — 11/08/2021
first official
Justice Kipp — 11/08/2021
So homecoming
Because that doesn't come chronologically for a while
Dns.Hndrx — 11/08/2021
no the toby mcguire one
Justice Kipp — 11/08/2021
Okay cool
That is technically not a marvel movie. It's a Fox movie
Dns.Hndrx — 11/08/2021
it counts
Justice Kipp — 11/08/2021
Okay, sorry for umm actuallying you
I realized what I was doing a bit to late
Dns.Hndrx — 11/08/2021
You’re fine I didn’t even notice
Justice Kipp — Yesterday at 10:00 AM
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
    text-align: center;
    width: 1140px;
    margin: 0 auto;
    height: 90%;
}

.game {
    display: flex;
    justify-content: space-around;
}

.player {
    width: 50%;
    margin: 0 5px;
}

.player_head {
    background-color: #D3D3D3;
    padding: 20px;
    border-radius: 5px;
}

.player_options {
    display: flex;
    justify-content: space-evenly;
}

.computer {
    width: 50%;
    margin: 0 5px;
}

.computer_head {
    background-color: #D3D3D3;
    padding: 20px;
    border-radius: 5px;
}

.computer_options {
    display: flex;
    justify-content: space-evenly;
}

.clicked {
    color: #A5A5A5;
}

h1 {
    text-align: center;
    padding: 5px;
}

button {
    bottom: 0;
    width: 20%;
    padding: 5px 10px;
    margin: 20px; 
}

#message {
    text-align: center;
    font-size: 50px;
    margin: 20px;
}
Justice Kipp — Today at 9:02 AM
Attachment file type: archive
js.zip
22 bytes
Attachment file type: archive
css.zip
22 bytes
Attachment file type: archive
htim.zip
401 bytes
Justice Kipp — Today at 9:14 AM
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="tictacAi.css">
</head>

<body>

    <table>
        <tr>
            <td class="cell" id="0"></td>
            <td class="cell" id="1"></td>
            <td class="cell" id="2"></td>
        </tr>
        <tr>
            <td class="cell" id="3"></td>
            <td class="cell" id="4"></td>
            <td class="cell" id="5"></td>
        </tr>
        <tr>
            <td class="cell" id="6"></td>
            <td class="cell" id="7"></td>
            <td class="cell" id="8"></td>
        </tr>
    </table>
    <div class="endgame">
        <div class="text"></div>
    </div>
    <button onClick="startGame()">Replay</button>

  <script src="tictacAi.js"></script>
</body>
</html>
var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
Expand
message.txt
4 KB
td {
    border:  2px solid #333;
    height:  100px;
    width:  100px;
    text-align:  center;
    vertical-align:  middle;
    font-family:  "Comic Sans MS", cursive, sans-serif;
    font-size:  70px;
    cursor: pointer;
}
table {
    border-collapse: collapse;
    position: absolute;
    left: 50%;
    margin-left: -155px;
    top: 50px;
}

table tr:first-child td {
    border-top: 0;
}

table tr:last-child td {
    border-bottom: 0;
}

table tr td:first-child {
    border-left: 0;
}

table tr td:last-child {
    border-right: 0;
}

.endgame {
  display: none;
  width: 200px;
  top: 120px;
  background-color: rgba(205,133,63, 0.8);
  position: absolute;
  left: 50%;
  margin-left: -100px;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-size: 2em;
}
﻿
var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer)
        if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
    }
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == huPlayer ? "blue" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return minimax(origBoard, aiPlayer).index;
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}

function minimax(newBoard, player) {
    var availSpots = emptySquares();

    if (checkWin(newBoard, huPlayer)) {
        return {score: -10};
    } else if (checkWin(newBoard, aiPlayer)) {
        return {score: 10};
    } else if (availSpots.length === 0) {
        return {score: 0};
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == aiPlayer) {
            var result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    var bestMove;
    if(player === aiPlayer) {
        var bestScore = -10000;
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}
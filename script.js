var tries;
var currentPlayer = "";
var p1_win = 0;
var p2_win = 0;
var n_draw = 0;

var player_1 = "";
var player_2 = "";

function startGame() {
  
  player_1 = prompt("enter name for player 1", "player_1");
  if (player_1 === ""){
    player_1 = "player_1"; //add alert on not entering a name
  }

  player_2 = prompt("enter name for player 2", "player_2");
  if (player_2 === ""){
    player_2 = "player_2"; //add alert on not entering a name
  }

  tries = 0;

  for (var i = 1; i <= 9; i = i + 1) {
    clearCell(i);
  }

    document.getElementById("s1").style.backgroundColor = "white";
    document.getElementById("s2").style.backgroundColor = "white";
    document.getElementById("s3").style.backgroundColor = "white";
    document.getElementById("s4").style.backgroundColor = "white";
    document.getElementById("s5").style.backgroundColor = "white";
    document.getElementById("s6").style.backgroundColor = "white";
    document.getElementById("s7").style.backgroundColor = "white";
    document.getElementById("s8").style.backgroundColor = "white";
    document.getElementById("s9").style.backgroundColor = "white";

  document.turn = "X";                         // setting the first chance to be of random probability of 0.5 for each player
  currentPlayer = player_1;                    // change this to maybe user selection of x or o??
			if (Math.random() < 0.5) {
        document.turn = "O";
        currentPlayer = player_2;
      }
  document.winner = null;
  setMessage(currentPlayer + " gets to start. He/She gets to play :" + document.turn);
  showScore(player_1 + " won : " + p1_win +"\n" + player_2 +" won : " + p2_win +"\n" + n_draw +" tie games.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function showScore(score){                            //setting up score on the page
document.getElementById("P1_score").innerText = (player_1 +"'s wins: "+ p1_win);
document.getElementById("P2_score").innerText = (player_2 +"'s wins: "+ p2_win);
document.getElementById("draws").innerText = (n_draw + " games drawn ");
}


   // <div id="score" style = "position: absolute; left: 10px; top: 500px">score here</div>
	//	<div id="score" style = "position: absolute; left: 10px; top: 500px">score here</div>
	//	<div id="score" style = "position: absolute; left: 10px; top: 500px">score here</div>


function nextMove(square) { 
   if(document.winner != null){
    setMessage(findCurrentPlayer(document.winner) + " already won the game.");
  }else if(square.innerText == ""){
    square.innerText = document.turn;
    tries += 1;
    switchTurn();
  }else{
    setMessage("That square is already used.");
  }
}

function switchTurn() {
  
  if (checkForWinner(document.turn)) {
    document.winner = document.turn;
  } else if( tries == 9){ 
    setMessage("The game is a tie.");
  }else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + player_2 + "'s turn!");
  } else if(document.turn == "O"){
    document.turn = "X";
    setMessage("It's " + player_1 + "'s turn!");
  }
}

function getCell(number){
  return document.getElementById("s" + number).innerText;
}

function clearCell(number){
  document.getElementById("s" + number).innerText = "";
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
    result = true;
    makeGreen(a,b,c)
    setMessage("Congratulations, " +  findCurrentPlayer(document.turn) + " you win!");
    if( findCurrentPlayer(document.turn) == player_1){
      p1_win += 1;
    }else if( findCurrentPlayer(document.turn) == player_2){
      p2_win += 1;
    }
  }
  return result;
}

function makeGreen(a, b, c) {
  document.getElementById("s" + a).style.backgroundColor = "green";
  document.getElementById("s" + b).style.backgroundColor = "green";
  document.getElementById("s" + c).style.backgroundColor = "green";
}

function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) || 
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) || 
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    
    result = true;
  }
  return result;
}

function findCurrentPlayer(name){
  if(name == "O"){
    currentPlayer =  player_2;
  }else{
    currentPlayer =  player_1;
  }
  return currentPlayer;
}
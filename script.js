var tries;
var currentPlayer = "";

function startGame() {
  
  var player_x = prompt("enter name for player 1", "player_1");
  if (player_x === ""){
    player_x = "player_1"; //add alert on not entering a name
  }

  var player_o = prompt("enter name for player 2", "player_2");
  if (player_o === ""){
    player_o = "player_2"; //add alert on not entering a name
  }

  tries = 0;

  for (var i = 1; i <= 9; i = i + 1) {
    clearCell(i);
  }

  document.turn = "X";
  currentPlayer = player_x;
			if (Math.random() < 0.5) {
        document.turn = "O";
        currentPlayer = player_o;
			}

  document.winner = null;
  setMessage(currentPlayer + " gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if(document.winner != null){
    setMessage(document.winner + "already won the game.");
  }else if(checkDraw(tries)){
    setMessage("The game is a draw");
  }else if(square.innerText == ""){
    square.innerText = document.turn;
    tries += 1;
    switchTurn();
  }else {
    setMessage("That square is already used.");
  }
}

function checkDraw(move_performed){
  if(move_performed > 7){
    return true;
  }
  return false;
}

function switchTurn() {
		
  if (checkForWinner(document.turn)) {
    setMessage("Congratulations, " + document.turn + "!  You win!");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn!");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn!");
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
// Script for local gameplay

var moves;                      // number of total moves made by both players in the game
var currentPlayer = "";         
var p1_win = 0;                 // the number of wins for player 1
var p2_win = 0;                 // the number of wins for player 2
var n_draw = 0;                 // number of ties
var player_1 = "";
var player_2 = "";

function playAgain(){
  if(confirm(" Start a new game? ")){
  moves = 0;

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
  currentPlayer = player_1;                    // however this code assigns player 1 as "X" and player 2 as "O". However
			if (Math.random() < 0.5) {               // the person who should be the first to move is still randomized.
        document.turn = "O";                   // document.turn is a variable for the HTML file. It can be replaced by any other symbol.
        currentPlayer = player_2;
      }

  document.winner = null;                                                // the symbol which won the current match, not the payer as it is easier   
  setMessage(currentPlayer + " gets to start. \n You play : " + document.turn);               //  to find the player name from the symbol.
  showScore(player_1 + " won : " + p1_win +"\n" + player_2 +" won : " + p2_win +"\n" + n_draw +" tie games.");
  }

}


function startGame() {                                        // This function is called when the game is loaded, i.e. the webapge that
  p1_win = 0;                                                 // contains the game is loaded in the browser.
  p2_win = 0;                                                 // It is reponsible for setting up the board, and initializing the parameters
    player_1 = prompt("enter name for player 1", "player_1"); // like scores and player names.
  if (player_1 === "" || player_1 === null){                  // If during the prompt in which the game asks for names of players, cancelling   
    player_1 = "player_1";                                    // the dialog box as well as deleting the preset name "player_1/player_2" leads 
  }                                                           // the names being defined as "player_1" and "player_2" resplectively.                  
                                                              // THE ONLY difference betweem this function and resetGame is that this doesn't
  player_2 = prompt("enter name for player 2", "player_2");   // turns the boards squares as white. Reset game could be called as well for that 
  if (player_2 === "" || player_2 === null ){                 // but I decided to keep a separate function should I add some feature later.
    player_2 = "player_2"; 
  }

  moves = 0;                                                   // current number of moves played set to 0.

  for (var i = 1; i <= 9; i = i + 1) {
    clearCell(i);
  }
  document.turn = "X";                         // setting the first chance to be of random probability of 0.5 for each player
  currentPlayer = player_1;                    // Note the player 1 is always "X" and player 2 is always "O", but the probability  
			if (Math.random() < 0.5) {               // of a player getting the chance to move first is still randomized.
        document.turn = "O";
        currentPlayer = player_2;
      }
  document.winner = null;                     // current winner set to NULL
  setMessage(currentPlayer + " gets to start. He/She gets to play :" + document.turn);
  showScore(player_1 + " won : " + p1_win +"\n" + player_2 +" won : " + p2_win +"\n" + n_draw +" tie games.");
}

function resetGame(){                                                   // Resets the game; The names are requested again, the scores are
  if(confirm("This will reset the scores to 0! Reset?")){               // reset to 0 basically this function acts as the "refresh" for the
  p1_win = 0;                                                           // game.
  p2_win = 0;                                                           // For the difference between this function and startGame, look
    player_1 = prompt("enter name for player 1", "player_1");           // into the comments next to startGame function definition.
  if (player_1 === "" || player_1 === null){
    player_1 = "player_1"; 
  }

  player_2 = prompt("enter name for player 2", "player_2");
  if (player_2 === "" || player_2 === null ){
    player_2 = "player_2"; 
  }

  moves = 0;                                                           // setting moves to 0 in case of a new game   

  for (var i = 1; i <= 9; i = i + 1) {                                 // removing symbols from boards from last game.
    clearCell(i);
  }
  
  for(var n = 1; n <=9; n = n+1){
    document.getElementById("s" + n).style.backgroundColor = "white";      // Makes the color of all the squares as white.
  }                                                                             // removing the green color from squares from last game.
    

  document.turn = "X";                         // setting the first chance to be of random probability of 0.5 for each player
  currentPlayer = player_1;                    // Note the player 1 is always "X" and player 2 is always "O", but the probability
			if (Math.random() < 0.5) {               // of a player getting the chance to move first is still randomized.
        document.turn = "O";                   
        currentPlayer = player_2;
      }
  document.winner = null;
  setMessage(currentPlayer + " gets to start. He/She gets to play :" + document.turn);
  showScore(player_1 + " won : " + p1_win +"\n" + player_2 +" won : " + p2_win +"\n" + n_draw +" tie games.");
    }
}

function setMessage(msg) {                                               // sets up initial greeting message
  document.getElementById("message").innerText = msg;
}

function showScore(score){                                               //setting up score on the game screen
document.getElementById("P1_score").innerText = (player_1 +"'s wins: "+ p1_win);
document.getElementById("P2_score").innerText = (player_2 +"'s wins: "+ p2_win);
document.getElementById("draws").innerText = (n_draw + " games drawn ");
}

function nextMove(square) {                                             // this function is called whenever the user clicks on one 
   if(document.winner != null){                                                 // of the squares on the game board.  
    setMessage(findCurrentPlayer(document.winner) + " already won the game.");  // If there is already is a winner, the game will display the 
  }else if(square.innerText == ""){                                             // message and not allow subsequent moves. If the square is  
    square.innerText = document.turn;                                           // empty and the game hasn't ended, the square is now filled
    moves += 1;                                                                 // with the symbol of the player who made the move. 
    switchTurn();                                                               // If the square already contains a symbol and the game is 
  }else{                                                                        // undecided, the game gives the message that the square is 
    setMessage("That square is already used.");                                 // filled up already.
  }
}

function switchTurn() {                                                 // Switches the turn for the symbols (not players); 
  if (checkForWinner(document.turn)) {                                          // 1.first it checks if there is a winner, in which case the   
    document.winner = document.turn;                                            //   current symbol (before switch) is set as the winner. No
  } else if( moves == 9){                                                       //   further switching is done in this case.
    setMessage("The game is a tie.");                                           // 2.If there is no winner and the number of moves after the
    n_draw += 1;                                                                //   last turn is 9, the game sends a message for a tie game. 
  }else if (document.turn == "X") {                                             //   and no switch occurs.
    document.turn = "O";                                                        // 3.In case of no tie and no winner, the function switches the  
    setMessage("It's " + player_2 + "'s turn!");                                //   symbol alternating between the symbols, depending on the 
  } else if(document.turn == "O"){                                              //   last symbol, setting the corresponding message indicating
    document.turn = "X";                                                        //   whose turn it is.
    setMessage("It's " + player_1 + "'s turn!");
  }
}

function getCell(number){                                               //return the symbol a square contains
  return document.getElementById("s" + number).innerText;
}

function clearCell(number){                                             // clears the square if any symbol is in it.
  document.getElementById("s" + number).innerText = "";
}

function checkRow(a, b, c, move) {                                              // Takes 4 arguments, 3 cell numbers and a symbol, then
  var result = false;                                                           // checks if the 3 cells contain the same symbol
  if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {         // returns true if the symbol is same, increments the  
    result = true;                                                              // respective player's score and turns the combination
    makeGreen(a,b,c)                                                            // squares green on the board. It also displays the message
    if( findCurrentPlayer(document.turn) == player_1){                          // for the win and updates the score.
      p1_win += 1;                                                              // If the 3 squares don't contain the same symbol the function
    }else if( findCurrentPlayer(document.turn) == player_2){                    // returns false.
      p2_win += 1;
    }
  }
  setMessage("Congratulations, " +  findCurrentPlayer(document.turn) + " you win!");
  showScore(player_1 + " won : " + p1_win +"\n" + player_2 +" won : " + p2_win +"\n" + n_draw +" tie games.");
  return result;
}

function makeGreen(a, b, c) {                                           //this function is responsible for turning the squares 
  document.getElementById("s" + a).style.backgroundColor = "green";     // with the winning combination to green. 
  document.getElementById("s" + b).style.backgroundColor = "green";
  document.getElementById("s" + c).style.backgroundColor = "green";
}

function checkForWinner(move) {                                         // checks if any of the 3 rows, 3 columns or the 2 diagonals
  var result = false;                                                   // contain a same symbol, indicating a win.
  if (checkRow(1, 2, 3, move) ||                                        // If such a combinaton exists, the function returns true, else false.     
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

function findCurrentPlayer(name){                                       // helper function to figure out the name of the current player by 
  if(name == "O"){                                                      // returning the name of player to whom the current symbol belongs to.  
    currentPlayer =  player_2;
  }else{
    currentPlayer =  player_1;
  }
  return currentPlayer;
}

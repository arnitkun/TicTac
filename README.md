


# TicTac : Player versus Player Tic-Tac-Toe

TicTac is a player versus player Tic-Tac-Toe game built using HTML, CSS and Javascript. **Currently it supports local PVP games only.**
Tic-Tac-Toe is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

To See a demo of the app go to : https://ticotac.herokuapp.com/

![TicTac screenshot](https://github.com/arnitkun/TicTac/blob/master/demotac1.PNG)<br />

## Table of Contents

1. [How to install the game](#how-to-install-the-game)
2. [Game features](#Game-features)
3. [Instructions for playing](#Instructions-for-playing)
4. [Game requirements](#Game-requirements)


## How to install the game:

1. To play in your browser go to : https://ticotac.herokuapp.com/ OR
2. Clone the repository: ```https://github.com/arnitkun/TicTac```
3. Open the tic-tac-toe.html file from the root directory of the repository.

## Game features:

1. Local player versus player gameplay.
2. Ability to maintain win count of both players as well as the number of draws, until new players join the game.
3. Option to play again if players want to play the game again.
4. Option to reset the game without refreshing the page.
5. Winning combination is highlighted.
6. Downloading the game files not necessary.

## Instructions for playing:
   For Local player versus player only:
1. The game asks for the name of both players, not putting in the name as well as deleting the preset "player_1" or "player_2"
   text names the respective players "player_1" or "player_2" repectively. Same is the case if one "cancels" the dialog box asking for      player name.
2. The first player to enter his/her name is "X" while the second player is "O".
3. The first probability of a player getting to move first is randomized.
4. To mark a square with a symbol, the player needs to click on a square of his choice.
5. Clicking on a square that already has a "X" or an "O" reults in the game telling you that the square is alredy used.
6. Clicking on a square that already has a "X" or an "O" reults in the game telling you that the square is alredy used.
7. Once a player wins, the winning combination lights up in green on the board.
8. The game will tell if a match is draw or if someone wins and, updates the score of the winner by one.
9. To play again, one of the players can press the "Play Again!" button to start a fresh new game. Upon clicking "Play Again!" the  players are prompted with a confirmation of they want to start a new game, clicking "yes" starts a new game keeping the scores and player names unchanged while clicking "no" will cancel the initiation of a new game, returning the player to the old game.
10. A reset button exists to restart the game, allowing for new players to play. This resets the playernames and therefore the scores. On     clicking the button, the players are prompted for confirmation, clicking "yes" resets while clicking "no" cancels the reset action.
 11. The scores remain until the browser is closed, refreshed or the reset button is pressed.
 
 **Should the "prevent this page from creating more popups." dialog box apper with a user clicking "yes", the page would need to be  refreshed.**
 
 ## Game requirements:
 
 1. Currently the game requires only a web browser with javascript enabled.

##Note:

The application is under modification to use express, hence the supporting code and modules are present in the 
repository.

 
 [back to top](#table-of-contents)

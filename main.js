// variables
var game = new Game(new Player('player1', 'dragon'), new Player('player2', 'wizard'))
var gameBoard = document.querySelector('.game_grid')
var squares = document.querySelectorAll('.tile')
var playerOne = document.getElementById('playerOne')
var playerTwo = document.getElementById('playerTwo')
var mainHeader = document.querySelector('.player_turn')

// event listeners

gameBoard.addEventListener('click', placeToken)

// event handlers


function placeToken(event) {
  var box = parseInt(event.target.id);
  game.board[box] = game.turn.token;
  event.target.innerHTML += `<img class="player_image" src="assets/${game.turn.token}.png" alt=" A ${game.turn.token}">`
  disable(event);
  game.checkAllWins();
  game.checkForDraw();
  game.switchTurns();
  checkResults();
  }

function checkResults() {
    if (game.winner === game.player1 || game.winner === game.player2) {
      mainHeader.innerHTML = `<img class="player_image" src="assets/${game.winner.token}.png" alt=" A ${game.winner.token}"> Wins!`;
  } else if (game.winner === "draw"){
      mainHeader.innerText = "It's a draw!";
      console.log("It's a draw!")  ;
  }
  }



function disable(event) {
  event.target.disabled = true;
}




// variables
var game = new Game(new Player('player1', 'dragon'), new Player('player2', 'wizard'))
var gameBoard = document.querySelector('.game_grid')
var squares = document.querySelectorAll('.tile')
var playerOneWins = document.getElementById('playerOne')
var playerTwoWins = document.getElementById('playerTwo')
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
      playerOneWins.innerText = `Wins: ${game.player1.wins}`
      playerTwoWins.innerText = `Wins: ${game.player2.wins}`
      //setTimeout(resetBoard, 2000)
    } else if (game.winner === "draw"){
      mainHeader.innerText = "It's a draw!";
      //setTimeout(resetBoard, 2000)
    }
  }


function resetBoard() {
  if (game.isPlayable === false) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = ""
      squares[i].disabled = false
    }
  }
}

function disable(event) {
  event.target.disabled = true;
}




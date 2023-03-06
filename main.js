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
  disableSquare(event);
  game.checkAllWins();
  game.checkForDraw();
  game.switchTurns();
  toggleTokens();
  checkResults();
  }

function checkResults() {
  if (game.winner === game.player1 || game.winner === game.player2) {
      mainHeader.innerHTML = `<img class="player_image" src="assets/${game.winner.token}.png" alt=" A ${game.winner.token}"> Wins!`;     
      playerOneWins.innerText = `Wins: ${game.player1.wins}`
      playerTwoWins.innerText = `Wins: ${game.player2.wins}`
      setTimeout(resetBoard, 2000)
    } else if (game.winner === "draw"){
      mainHeader.innerText = "It's a draw!";
      setTimeout(resetBoard, 2000)
    }
  }

function resetBoard() {
  if (game.isPlayable === false) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = ""
      squares[i].disabled = false
    }
    game.isPlayable = true
    game.turn = game.player1
    game.moves = 0;
    game.winner = undefined
    game.board = [0, 1, 2, 
                  3, 4, 5, 
                  6, 7, 8]
  }
}

function toggleTokens() {
  mainHeader.innerHTML = `It's <img class="player_image" src="assets/${game.turn.token}.png" alt=" A ${game.turn.token}">'s Turn`
}

function disableSquare(event) {
  event.target.disabled = true;
}




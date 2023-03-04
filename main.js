// variables
var game = new Game(new Player(`player1`, `dragon`), new Player(`player2`, `wizard`))
var gameBoard = document.querySelector('.game_grid')
var squares = document.querySelectorAll('.tile')
var playerOneWins = document.getElementById('playerOne')
var playerTwoWins = document.getElementById('playerTwo')


// event listeners
//gameBoard.addEventListener('click', makeMove)
gameBoard.addEventListener('click', placeToken)

// event handlers

// function makeMove() {
//   placeToken()
//   game.switchTurns();
//   // checkResults()
  
// }

function placeToken(event) {
  var box = parseInt(event.target.dataset.id)
  //var boxImg = `<img class="player_image disabled" src="assets/${game.turn.token}.png" alt="A ${game.turn.token}">`;
  game.board[box] = game.turn.id;
  event.target.innerHTML += `<img class="player_image" src="assets/${game.turn.token}.png" alt=" A dragon">`
  disable(event);
  checkResults()
  game.switchTurns();
  console.log(game.board)
  }

  function checkResults() {
    if (game.checkAllWins()) {
      console.log(`${game.turn.id} Wins!`)
      return
  } else if (game.checkForDraw()) {
      console.log("It's a draw!")  
      return
  }
  }

  function trackWins() {
    
  }

function disable(event) {
  event.target.disabled = true;
}




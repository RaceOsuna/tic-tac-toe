// variables
var game = new Game(new Player(`player1`, `dragon`), new Player(`player2`, `wizard`))
//var currentPlayer = game.player1
var gameBoard = document.querySelector('.game_grid')
var squares = document.querySelectorAll('.tile')

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
  var box = event.target.data.id
  var boxImg = `<img class="player_image disabled" src="assets/${game.turn.token}.png" alt="A ${game.turn.token}">`;
  event.target.innerContent += `<img class="player_image" src="assets/${game.turn.token}.png" alt=" A dragon">`
  game.board[box] = game.turn.id;
  event.target.insertAdjacentHTML('afterbegin', boxImg)
  disable(event);
  checkResults()
  // game.switchTurns();
  console.log(game.board)
  }

  function checkResults() {
    if (game.checkAllWins()) {
      console.log('winner')
  } else if (game.checkForDraw()) {
      console.log('draw')
  }
  }

function disable(event) {
  event.target.disabled = true;
}




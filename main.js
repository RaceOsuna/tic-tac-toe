// variables
var game = new Game(new Player(`player1`, `dragon`), new Player(`player2`, `wizard`))

var gameBoard = document.querySelector('.game_grid')
var square = document.querySelectorAll('.tile')

// event listeners
gameBoard.addEventListener('click', changeSquare)

// event handlers


function changeSquare(event) {
  for (var i = 0; i < square.length; i++)
  var box = event.target.closest('button')
  box.innerHTML += `<img class="player_image" src="assets/dragon.png" alt=" A dragon">`
}



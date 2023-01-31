const btnStart    = document.querySelector('#start')
let game

btnStart.addEventListener('click', function start() {
	game = new Game()
	btnStart.removeEventListener('click', start);
	game.showSequence()
})






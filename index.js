const $buttonRockPlayer1 = document.querySelector('.button-move-rock-1')
const $buttonPaperPlayer1 = document.querySelector('.button-move-paper-1')
const $buttonScissorsPlayer1 = document.querySelector('.button-move-scissors-1')

const $buttonRockPlayer2 = document.querySelector('.button-move-rock-2')
const $buttonPaperPlayer2 = document.querySelector('.button-move-paper-2')
const $buttonScissorsPlayer2 = document.querySelector('.button-move-scissors-2')

const $moveBox1 = document.querySelector('#move-box-1')
const $moveBox2 = document.querySelector('#move-box-2')

const $scorePlayer1 = document.querySelector('#score-1')
const $scorePlayer2 = document.querySelector('#score-2')

const $winnerTitle = document.querySelector('.winner-title')

const $resetGame = document.querySelector('#reset-button')
const $startGame = document.querySelector('#start-button')

let movePlayer1 = ''
let movePlayer2 = '' 
let winner = 0
let player1Score = 0
let player2Score = 0
let start = false

function verifyWinner() {
    if(movePlayer1 == '' || movePlayer2 == '') {
        return
    }

    if (movePlayer1 == 'rock' && movePlayer2 == 'paper') {
      winner = 2
    } else if (movePlayer1 == 'rock' && movePlayer2 == 'scissors') {
      winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'rock') {
      winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
      winner = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'rock') {
      winner = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
      winner = 1
    } else if (movePlayer1 == movePlayer2) {
      winner = 3
    }
}

function addWinnerScore() {
  if(winner == 1) {
    player1Score++
  } else if (winner == 2 ) {
    player2Score++
  }
}

function printWinnerScore() {
  $scorePlayer1.innerHTML = player1Score.toString().padStart(2, '0')
  $scorePlayer2.innerHTML = player2Score.toString().padStart(2, '0')
}

function printWinnerTitle() {
   if (winner == 0) {
   $winnerTitle.innerHTML = 'jokenpo'
   }
   if (winner == 1) {
       $winnerTitle.innerHTML = 'Jogador 1 ganhou!'
   }
   if (winner == 2) {
       $winnerTitle.innerHTML = 'Jogador 2 ganhou!'
   }
   if (winner == 3) {
    $winnerTitle.innerHTML = 'empate'
   }
}

function resetPlayersScore() {
  player1Score = ''
  player2Score = ''
}

function resetBattlefield() {
    $moveBox1.innerHTML = ''
    $moveBox2.innerHTML = ''
}

function resetMoveVariables() {
    movePlayer1 = ''
    movePlayer2 = ''
}

function resetEntireGame() {
  resetMoveVariables()
  resetBattlefield()
  resetPlayersScore()
  printWinnerScore() 
  printWinnerTitle()
  $startGame.textContent = 'Iniciar'
  $startGame.classList.remove('started')
}

function handleToggleGame() {
  if (start == false) {
    start = true
    $startGame.textContent = 'Parar'
    $startGame.classList.add('started')
  } else {
    start = false
    $startGame.textContent = 'Iniciar'
    $startGame.classList.remove('started')
  }
}

function handleRockPlayer1() {
   if (start == false) return
   $moveBox1.innerHTML = '<img src="./images/stone.png" alt="imagem de pedra" title="pedra"></img>'
   movePlayer1 = 'rock'
   verifyWinner()
   addWinnerScore()
   printWinnerScore()
   printWinnerTitle()
   if (winner != 0) {
      setTimeout(resetBattlefield, 1000)
      resetMoveVariables()
      winner = 0 
   }
}

function handlePaperPlayer1() {
    if (start == false) return
    $moveBox1.innerHTML = '<img src="./images/paper.png" alt="imagem de um papel" title="papel"></img>'
    movePlayer1  = 'paper'
    verifyWinner()
    addWinnerScore()
    printWinnerScore()
    printWinnerTitle()
    if (winner != 0) {
      setTimeout(resetBattlefield, 1000)
      resetMoveVariables()
      winner = 0 
   }
}

function handleScissorsPlayer1() {
    if (start == false) return 
    $moveBox1.innerHTML = '<img src="./images/scissors.png" alt="imagem de uma tesoura" title="tesoura"></img>'
    movePlayer1 = 'scissors'
    verifyWinner()
    addWinnerScore()
    printWinnerScore()
    printWinnerTitle()
    if (winner != 0) {
      setTimeout(resetBattlefield, 1000)
      resetMoveVariables()
      winner = 0 
   } 
}

function handleRockPlayer2() {
    if (start == false) return
    $moveBox2.innerHTML = '<img src="./images/stone.png" alt="imagem de pedra" title="pedra"></img>'
    movePlayer2 = 'rock'
    verifyWinner()
    addWinnerScore()
    printWinnerScore()
    printWinnerTitle()
    if (winner != 0) {
      setTimeout(resetBattlefield, 1000)
      resetMoveVariables()
      winner = 0 
   } 
}

function handlePaperPlayer2() {
    if (start == false) return
    $moveBox2.innerHTML = '<img src="./images/paper.png" alt="imagem de um papel" title="papel"></img>'
    movePlayer2 = 'paper'
    verifyWinner()
    addWinnerScore()
    printWinnerScore()
    printWinnerTitle()
    if (winner != 0) {
      setTimeout(resetBattlefield, 1000)
      resetMoveVariables()
      winner = 0 
   } 
}

function handleScissorsPlayer2() {
    if (start == false) return
    $moveBox2.innerHTML = '<img src="./images/scissors.png" alt="imagem de uma tesoura" title="tesoura"></img>'
    movePlayer2 = 'scissors'
    verifyWinner()
    addWinnerScore()
    printWinnerScore()
    printWinnerTitle()
    if (winner != 0) {
      setTimeout(resetBattlefield, 1000)
      resetMoveVariables()
      winner = 0 
   } 
}

$buttonRockPlayer1.addEventListener('click', handleRockPlayer1)
$buttonPaperPlayer1.addEventListener('click', handlePaperPlayer1)
$buttonScissorsPlayer1.addEventListener('click', handleScissorsPlayer1)

$buttonRockPlayer2.addEventListener('click', handleRockPlayer2)
$buttonPaperPlayer2.addEventListener('click', handlePaperPlayer2)
$buttonScissorsPlayer2.addEventListener('click', handleScissorsPlayer2)

$resetGame.addEventListener('click', resetEntireGame)
$startGame.addEventListener('click', handleToggleGame)



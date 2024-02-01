const $buttonRockPlayer1 = document.querySelector('.button-move-rock-1')
const $buttonPaperPlayer1 = document.querySelector('.button-move-paper-1')
const $buttonScissorsPlayer1 = document.querySelector('.button-move-scissors-1')

const $buttonRockPlayer2 = document.querySelector('.button-move-rock-2')
const $buttonPaperPlayer2 = document.querySelector('.button-move-paper-2')
const $buttonScissorsPlayer2 = document.querySelector('.button-move-scissors-2')

const $moveBox1 = document.querySelector('#move-box-1')
const $moveBox2 = document.querySelector('#move-box-2')

function handleRockPlayer1() {
   $moveBox1.innerHTML = '<img src="./images/stone.png" alt="imagem de pedra" title="pedra"></img>'
}

function handlePaperPlayer1() {
  $moveBox1.innerHTML = '<img src="./images/paper.png" alt="imagem de um papel" title="papel"></img>'
}

function handleScissorsPlayer1() {
  $moveBox1.innerHTML = '<img src="./images/scissors.png" alt="imagem de uma tesoura" title="tesoura"></img>'
}

function handleRockPlayer2() {
  $moveBox2.innerHTML = '<img src="./images/stone.png" alt="imagem de pedra" title="pedra"></img>'
}

function handlePaperPlayer2() {
 $moveBox2.innerHTML = '<img src="./images/paper.png" alt="imagem de um papel" title="papel"></img>'
}

function handleScissorsPlayer2() {
 $moveBox2.innerHTML = '<img src="./images/scissors.png" alt="imagem de uma tesoura" title="tesoura"></img>'
}

$buttonRockPlayer1.addEventListener('click', handleRockPlayer1)
$buttonPaperPlayer1.addEventListener('click', handlePaperPlayer1)
$buttonScissorsPlayer1.addEventListener('click', handleScissorsPlayer1)

$buttonRockPlayer2.addEventListener('click', handleRockPlayer2)
$buttonPaperPlayer2.addEventListener('click', handlePaperPlayer2)
$buttonScissorsPlayer2.addEventListener('click', handleScissorsPlayer2)
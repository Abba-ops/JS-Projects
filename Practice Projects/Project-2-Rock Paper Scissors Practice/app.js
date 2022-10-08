const rock = document.getElementById('rock').textContent
const paper = document.getElementById('paper').textContent
const scissors = document.getElementById('scissors').textContent
const computerText = document.getElementById('computerChoice')
const playerText = document.getElementById('playerChoice')
const resultText = document.getElementById('result')
let playerChoice
let computerPick

function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    const options = [rock, paper, scissors]
    computerPick = options[randomNumber]
    computerText.innerText = `Computer: ${computerPick}`
}

function tie() {
    resultText.innerText = `Result: You Tied!`
}

function win() {
    resultText.innerText = `Result: You Win!`
}

function lose() {
    resultText.innerText = `Result: You Lose!`
}

document.getElementById('rock').onclick = function () {
    playerText.innerText = `Player: ${rock}`
    computerChoice()
    playerChoice = rock
    if (computerPick == playerChoice) {
        tie()
    } else if (computerPick == scissors) {
        win()
    } else if (computerPick == paper) {
        lose()
    }
}

document.getElementById('paper').onclick = function () {
    playerText.innerText = `Player: ${paper}`
    computerChoice()
    playerChoice = paper
    if (computerPick == playerChoice) {
        tie()
    } else if (computerPick == rock) {
        win()
    } else if (computerPick == scissors) {
        lose()
    }
}

document.getElementById('scissors').onclick = function () {
    playerText.innerText = `Player: ${scissors}`
    computerChoice()
    playerChoice = scissors
    if (computerPick == playerChoice) {
        tie()
    } else if (computerPick == paper) {
        win()
    } else if (computerPick == rock) {
        lose()
    }
}
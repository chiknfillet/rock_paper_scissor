let humanScore = 0
let computerScore = 0

const buttons = document.querySelector("#btn-container")
const result = document.querySelector('#results')

buttons.addEventListener('click', (event) => {
    let target = event.target
    let choice = ""

    switch (target.id) {
        case 'rock-btn':
            choice = "rock"
            break;
        case 'paper-btn':
            choice = "paper"
            break;
        case 'scissors-btn':
            choice = "scissors"
            break;
    }

    playRound(choice, getComputerChoice())
});

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                result.textContent = `\n You lose! Paper beats Rock! \n`
                computerScore++;
            } else if (computerChoice == "scissors") {
                result.textContent = `\n You win! Rock beats Scissors! \n`
                humanScore++
            } else {
                result.textContent = `\n It's a draw! \n`
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                result.textContent = `\n You win! Paper beats SciRockssors! \n`
                humanScore++;
            } else if (computerChoice == "scissors") {
                result.textContent = `\n You lose! Scissors beats Paper! \n`
                computerScore++
            } else {
                result.textContent = `\n It's a draw! \n`
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                result.textContent = `\n You lose! Rock beats Scissors! \n`
                computerScore++;
            } else if (computerChoice == "paper") {
                result.textContent = `\n You win! Scissors beats Paper! \n`
                humanScore++
            } else {
                result.textContent = `\n It's a draw!  \n`
            }
            break;
    }
    result.textContent += `Player: ${humanScore} vs Bot: ${computerScore}`
}

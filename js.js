let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    console.log(choice)
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter you choice: ")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            } else if (computerChoice == "scissors") {
                console.log("You lose! Paper beats Rock!");
                computerScore++
            } else {
                console.log("It's a draw!");
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock!");
                humanScore++;
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper!");
                computerScore++
            } else {
                console.log("It's a draw!");
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You win! Scissors beats Paper!");
                humanScore++;
            } else if (computerChoice == "paper") {
                console.log("You lose! Rock beats Scissors!");
                computerScore++
            } else {
                console.log("It's a draw!");
            }
            break;
    }
    console.log(humanScore + " " + computerScore)
}



function playGame() {
    for (let i =0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win this game!");
    } else if (humanScore < computerScore) {
        console.log("You lose this game!");
    } else {
        console.log("It's a draw");
    }
}

playGame()
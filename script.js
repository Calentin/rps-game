function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}


function getPlayerChoice() {
    while (true) {
        let choice = prompt("Choose: rock, paper or scissors");

        if (choice === null) {
            return null;
        }

        choice = choice.trim().toLowerCase();

        if (
            choice === "rock" ||
            choice === "paper" ||
            choice === "scissors"
        ) {
            return choice;
        }
        alert("Invalid choice. Please choose rock, paper or scissors.");
        console.log("Invalid choice. Try again.");
    }
}
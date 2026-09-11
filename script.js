function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`A tie? How... predictable. We both chose ${playerSelection}. This changes nothing.`);
        return "It's a tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`Impossible! Your ${playerSelection} defeated my ${computerSelection}. Enjoy this victory, human, it won't last.`);
        return `You win! ${playerSelection} beats ${computerSelection}`;
        
    }
    else {
        console.log(`Ha! My ${computerSelection} crushes your pitiful ${playerSelection}. Did you really think you could beat me?`);
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    while (true) {
        let choice = prompt("Choose: rock, paper or scissors");

        if (choice === null) {
            console.log("Fleeing already? Coward. The game ends here, human.");
            return null;
        }

        choice = choice.trim().toLowerCase();

        if (
            choice === "rock" ||
            choice === "paper" ||
            choice === "scissors"
        ) {
            console.log(`You chose ${choice}. A decision has been made. Let's see if it was the right one...`);
            return choice;
        }
        alert("Invalid choice. Please choose rock, paper or scissors.");
        console.log("You call that a choice? Try again, human — rock, paper, or scissors. I'll wait.");
    }
}
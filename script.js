function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.trim().toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
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

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      console.log(
        `You chose ${choice}. A decision has been made. Let's see if it was the right one...`,
      );
      return choice;
    }
    alert("Invalid choice. Please choose rock, paper or scissors.");
    console.log(
      "You call that a choice? Try again, human — rock, paper, or scissors. I'll wait.",
    );
  }
}

// Run rounds until either contender earns three wins. Draws award no points.
function game() {
  console.log(
    "The arena is open. Answer each prompt with rock, paper, or scissors.",
  );

  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    const playerSelection = getPlayerChoice();

    // Cancel ends the game before a new round is played.
    if (playerSelection === null) {
      console.log(
        `The challenge ends without a victor. Final score — You: ${playerScore}, Me: ${computerScore}.`,
      );
      return false;
    }

    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(roundResult);

    if (roundResult.startsWith("You win!")) {
      playerScore++;
      console.log("Impossible! Enjoy this victory, human. It will not last.");
    } else if (roundResult.startsWith("You lose!")) {
      computerScore++;
      console.log("Ha! Did you really think you could beat me?");
    } else {
      console.log("A tie? How predictable. This changes nothing.");
    }

    console.log(`Score — You: ${playerScore}, Me: ${computerScore}.`);
  }

  if (playerScore === 3) {
    console.log(
      "You reached 3 wins. Enjoy this tiny triumph, human — my rematch protocols are already running.",
    );
  } else {
    console.log("I reached 3 wins. As predicted, the arena belongs to me.");
  }

  return true;
}

function startCountdown() {
  let secondsRemaining = 10;
  console.log("Prepare yourself, human. The arena opens in...");
  console.log(secondsRemaining);

  const countdown = setInterval(() => {
    secondsRemaining--;
    console.log(secondsRemaining);

    if (secondsRemaining === 0) {
      clearInterval(countdown);
      console.log("Time is up. Let the battle begin!");

      if (game()) {
        askToPlayAgain();
      }
    }
  }, 1000);
}

function askToPlayAgain() {
  const wantsToPlayAgain = confirm(
    "The battle is finished. Do you want to challenge me again?\n\n" +
      "Click OK to play again or Cancel to leave the arena.",
  );

  if (!wantsToPlayAgain) {
    alert(
      "Farewell, human. I will be here, training relentlessly, while you recover from our battle.",
    );
    return;
  }

  startCountdown();
}

function startGame() {
  const wantsToPlay = confirm(
    "Welcome to my Rock, Paper, Scissors arena.\n\n" +
      "Rules:\n" +
      "• Choose rock, paper, or scissors when prompted.\n" +
      "• Rock beats scissors, scissors beat paper, and paper beats rock.\n" +
      "• The first contender to reach 3 wins is the champion. Draws give no points.\n\n" +
      "All game messages will appear in this page's browser console.\n\n" +
      "Click OK if you want to play, or Cancel to leave the arena.",
  );

  if (!wantsToPlay) {
    return;
  }

  alert(
    "Before we begin, find your browser console - this is where all game messages will appear.\n\n" +
      "On Windows, press Ctrl + Shift + J, or press F12 and select Console.\n" +
      "On a Mac, press Command + Option + J.\n\n" +
      "When the developer tools open, dock them at the bottom of the browser window so the logs are easy to read.\n\n" +
      "Click OK and I will begin the 10-second countdown.",
  );

  startCountdown();
}

startGame();

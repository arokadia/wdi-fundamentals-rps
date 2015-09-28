function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === "rock" && computerMove === "paper") {
         winner = "computer";
    }
    else if (playerMove === "paper" && computerMove === "paper") {
         winner = "tie";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
         winner = "player";
    }
    else if (playerMove === "rock" && computerMove === "rock") {
         winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
         winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
         winner = "computer";
    }
    else if (playerMove === "scissors" && computerMove === "scissors") {
         winner = "tie";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
         winner = "computer";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
         winner = "player";
    }
    else {
        winner = "invalid";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove1;
    var computerMove1;
    var winner;

    while (playerWins < 5 && computerWins < 5) {
        playerMove1 = getPlayerMove();
        console.log("Player moved!");
        computerMove1 = getComputerMove();
        console.log("Computer moved!");
        console.log('Player chose ' + playerMove1 + ' while Computer chose ' + computerMove1);
        winner = getWinner(playerMove1, computerMove1);
        if (winner === "player") {
            playerWins = playerWins + 1;
            console.log("Player wins!");
        }
        else if (winner === "computer") {
            computerWins = computerWins + 1;
            console.log("Computer wins!");
        }
        else {
            console.log("It's a draw.");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    return [playerWins, computerWins];
}
playToFive();
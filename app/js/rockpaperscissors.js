////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    move = move || getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    var move;
    move = move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
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
    else if (playerMove === "paper" && computerMove === "rock") {
         winner = "player";
    }
    else {
        winner = "invalid";
    }
    
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
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        winner = getWinner(playerMove1, computerMove1);
        if (winner === "player") {
            console.log("Player wins!");
        }
        else if (winner === "computer") {
            console.log("Computer wins!")
        }
        else {
            console.log("It's a draw.");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n')
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    return [playerWins, computerWins];
}
playToFive();

/**
 * This script represents a simple game of Rock Paper Scissors.
 *
 * @author Sebastian Corporan Berrios
 */



// Holds all possible choices
const arr = ["Rock", "Paper", "Scissors"];

/**
 * This function generates a random choice for the computer in a Rock, Paper, Scissors game.
 * @returns {string} The computer's random choice ("ROCK", "PAPER", or "SCISSORS").
 */
function getComputerChoice() {
    // Get the length of the array representing the game choices
    let n = arr.length;

    // Initialize the lower and upper bounds for generating a random index
    let lo = 0;
    let hi = n - 1;

    // Calculate the difference between upper and lower bounds
    var diff = hi - lo;

    // Generate a random number
    let val = Math.random();

    // multiply that # with the difference
    val = Math.floor(val * (diff));

    // add val with the lower bound of array
    val = val + lo;

    // Determine the computer's choice based on the random value
    // Convert the choice to uppercase for consistency
    switch ((val)) {
        case 0: // Computer chose "Rock"

            return arr[0].toUpperCase();

        case 1: // Computer chose "Paper"
            return arr[1].toUpperCase();

        case 2: // Computer chose "Scissors"
            return arr[2].toUpperCase();

    } // switch()

} // getComputerChoice()


//================================================================================================================


/**
 * Prompts the player to enter their choice for a Rock, Paper, Scissors game.
 * Converts the player's input to uppercase for consistency and returns the chosen option.
 * If an invalid choice is entered, it throws an error message in the console
 *
 * @returns {string} The player's choice ("ROCK", "PAPER", or "SCISSORS") or an error message.
 */
function getPlayerChoice() {
    // Prompt the player to enter their choice
    let choice = prompt("Rock, Paper, or Scissors?");

    // Convert the player's input to uppercase for consistency
    switch ((choice.toLowerCase())) {
        case "rock":
            return "ROCK";

        case "paper":
            return "PAPER";

        case "scissors":
            return "SCISSORS";

        default:
            // Throw an error for invalid choices
            const err = "Invalid choice: " + choice;
            throw new Error(err);

    } // switch()
} // getPlayerChoice()

//================================================================================================================

/**
 * Determines if the player wins in a round  based on their and the computer's choices.
 *
 * @param {string} pChoice - The player's choice ("ROCK", "PAPER", or "SCISSORS").
 * @param {string} compChoice - The computer's choice ("ROCK", "PAPER", or "SCISSORS").
 * @returns {boolean} True if the player wins, false otherwise.
 */
function doesPlayerWin(pChoice, compChoice) {


    // Initialize a variable to track if the player has won
    let hasWon = false;

    // Check conditions for player victory based on Rock, Paper, Scissors rules
    if (
        (pChoice == "ROCK" && compChoice == "SCISSORS") ||
        (pChoice == "PAPER" && compChoice == "ROCK") ||
        (pChoice == "SCISSORS" && compChoice == "PAPER")
    ) {

        hasWon = true;
    }

    else {
        hasWon = false;
    }

    // Return the result indicating whether the player has won
    return hasWon;

} // doesPlayerWin()


//================================================================================================================

/**
 * Plays a round of Rock, Paper, Scissors game and determines the result.
 * 
 * @param {string} playerSelection - The choice made by the player ("ROCK", "PAPER", "SCISSORS")
 * @param {string} computerSelection - The choice made by the computer ("ROCK", "PAPER", "SCISSORS")
 *
 * @returns {string} The result message indicating whether the player won, lost, or tied.
 */
function playRound(playerSelection) {
    let div = document.querySelector(".result-container");
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();


    // Determine if the player won or if it's a tie
    const hasPlayerWon = doesPlayerWin(playerSelection, computerSelection);
    const tie = isTied(playerSelection, computerSelection);

    // Return the appropriate result message
    if ((hasPlayerWon)) {
        div.innerHTML = winningMsg(playerSelection, computerSelection);
    }

    else if ((tie)) {
        div.innerHTML = tieMsg(playerSelection, computerSelection);
    }

    else {
        div.innerHTML = losingMsg(playerSelection, computerSelection);
    }

    div.append(div);
} // playRound()


//================================================================================================================

/**
 * Checks if the player's choice and computer's choice result in a tie.
 *
 * @param {string} pChoice - The player's choice ("ROCK", "PAPER", or "SCISSORS").
 * @param {string} compChoice - The computer's choice ("ROCK", "PAPER", or "SCISSORS").
 * @returns {boolean} True if it's a tie, false otherwise.
 */
function isTied(pChoice, compChoice) {
    return ((pChoice == compChoice));
} // isTied()

//================================================================================================================


/**
 * Generates a message for a winning scenario.
 *
 * @param {string} pChoice - The player's winning choice ("ROCK", "PAPER", or "SCISSORS").
 * @param {string} compChoice - The computer's losing choice ("ROCK", "PAPER", or "SCISSORS").
 * @returns {string} The winning message.
 */
function winningMsg(pChoice, compChoice) {
    let msg = "You win! " + pChoice + " beats " + compChoice;

    return msg;
} // winningMsg()

//================================================================================================================


/**
 * Generates a message for a losing scenario.
 *
 * @param {string} pChoice - The player's losing choice ("ROCK", "PAPER", or "SCISSORS").
 * @param {string} compChoice - The computer's winning choice ("ROCK", "PAPER", or "SCISSORS").
 * @returns {string} The losing message.
 */
function losingMsg(pChoice, compChoice) {
    let msg = "You lose! " + compChoice + " beats " + pChoice;

    return msg;
} // losingMsg()

//================================================================================================================


/**
 * Generates a message for a tie scenario.
 *
 * @param {string} choice - The choice made by both the player and the computer
 * @returns {string} The tie message.
 */
function tieMsg(choice) {
    let msg = "It's a tie! You both chose " + choice;
    return msg;
} // tieMsg()

//================================================================================================================

/**
 * The main function for the rock-paper-scissors game.
 * Plays multiple rounds until either the player or the computer reaches a score of 3.
 *
 * 
 */
function game() {


    //  and round number
    let round = 1;


} // game()



//================================================================================================================




/**
 * Determines the winner of the game based on player and computer scores.
 *
 * @function determineWinner
 * @param {number} pScore - The player's score.
 * @param {number} cScore - The computer's score.
 * @returns {string} - A message indicating the winner or a tie, including the scores.
 */
function determineWinner(pScore, cScore) {

    let msg = "";
    if ((pScore > cScore)) {
        msg = "You win!\nYour Score: " + pScore + "\n" + "Computer Score: " + cScore;

    }

    else if ((cScore > pScore)) {

        msg = "You lose!\nYour Score: " + pScore + "\n" + "Computer Score: " + cScore;

    }

    else {

        msg = "It's a tie!\nYour Score: " + pScore + "\n" + "Computer Score: " + cScore;

    }

    return msg;


} // determineWinner()

//================================================================================================================


// game();


//================================================================================================================


const rockBtn = document.querySelector(".rock-btn");

const paperBtn = document.querySelector(".paper-btn");

const scissorsBtn = document.querySelector(".scissors-btn");

const playerScoreDisplay = document.querySelector(".pScore");

const compScoreDisplay = document.querySelector(".cScore");


let computerScore = 0;
let playerScore = 0;

function handleRockClick() {

    rockBtn.addEventListener("click", () => {

        let round = playRound("rock");

        switch ((round)) {
            case winningMsg("rock"):
                break;
                playerScore++;
            case losingMsg("rock"):
                computerScore++;
                break;

            case tieMsg("rock"):
                break;
        } // switch()


    });

} // handleRockClick()



//================================================================================================================




function displayPlayerScore(score) {

    playerScoreDisplay.innerHTML = "Player Score: " + score + "";


} // displayScore()


function displayComputerScore(score) {

    compScoreDisplay.innerHTML = "Computer Score: " + score;

} // displayComputerScore()



handleRockClick();
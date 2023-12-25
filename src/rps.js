/**
 * This  script represents a simple game of Rock Paper Scissors
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

} // getComputerChoice


//================================================================================================================


/**
 * This function prompts the player to enter their choice.
 * It converts the player's input to uppercase for consistency and returns the chosen option.
 * If an invalid choice is entered, it returns an error message.
 *
 * @returns {string} The player's choice ("ROCK", "PAPER", or "SCISSORS") or an error message
 */
function getPlayerChoice() {
    // Prompt the player to enter their choice
    let choice = prompt("Rock, Paper, or Scissors?");

    // Convert the player's input to uppercase for consistency
    switch ((choice)) {
        case "rock":
            choice = choice.toUpperCase();
            break;

        case "paper":
            choice = choice.toUpperCase();
            break;

        case "scissors":
            choice = choice.toUpperCase();
            break;

        default:
            // Handle invalid choices and return an error message
            const err = "Invalid choice: " + choice;
            return err;
    } // switch()

    // Return the player's valid choice
    return choice;
} // getPlayerChoice()



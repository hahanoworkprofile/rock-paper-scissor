const choices = ["rock", "paper", "scissor"];

const computerPlay = () => choices[Math.floor(Math.random()*choices.length)]

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => { 
    if(playerSelection==computerSelection) return "Draw";
    if(playerSelection=="rock" && computerSelection=="scissor" ||
       playerSelection=="scissor" && computerSelection == "paper" ||
       playerSelection=="paper" && computerSelection=="rock") {
           playerScore++;
        return "Win! Your " + playerSelection + " wins " +computerSelection; 
    }
    computerScore++;
    return "Lose! Your " + playerSelection + " loses " + computerSelection ; 
}

const game = (rounds) => {
    if (playerScore>=5) { 
        console.log("You win!");
        return;
    }
    if(computerScore>=5) { 
        console.log("You lose!");
        return;
    }

    let playerChoice;  
    playerChoice = prompt("RPS?").toLowerCase();
    console.log(playRound(playerChoice, computerPlay()));
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}
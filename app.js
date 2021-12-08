const computerPlay = () => { 
   rand = Math.floor(Math.random()*4); 
   if (rand==1) { 
      return "rock";
   }
   else if (rand==2) {
       return "scissor";
   }
   else  {
       return "paper";
   }
}

let playerScore;
let computerScore;

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
    let playerChoice;  
    playerChoice = prompt("RPS?").toLowerCase();
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Your score is ${playerScore} and the computer's score is: ${computerScore}`);
}
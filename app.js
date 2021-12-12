//rps function
const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => choices[Math.floor(Math.random()*choices.length)]

const checkRound = (playerSelection, computerSelection) => { 
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

const playRound = (ps, cs) => { 
    if(playerScore>=5) return "Yay you win!" ;
    if(computerScore>=5) return "You, you lost!";
    let res = checkRound(ps,cs); 
  
    return res; 
}

//ui function 
let resultText = document.querySelector('.result.text');
let resultPlayer = document.querySelector('.result.player');
let resultComputer = document.querySelector('.result.computer');

const getDataChoice = element => element.getAttribute("data-choice");
let btns = document.querySelectorAll("[data-choice]"); 
btns.forEach(btn => btn.addEventListener('click', e => {
   resultText.textContent = playRound(getDataChoice(btn), computerPlay()); 
   resultPlayer.textContent = playerScore; 
   resultComputer.textContent = computerScore; 
} ) )


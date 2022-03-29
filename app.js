let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".choice");
let title = document.querySelector(".title")
let para = document.querySelector(".para")
let left = document.querySelector(".left")
let container = document.createElement("div");
let playerCard = document.createElement("div");
let playerTotal = document.createElement("div");
let computerTotal = document.createElement("div");
let computerCard = document.createElement("div");
let vs = document.createElement("div")

let playerMark = document.createElement("div");
let computerMark = document.createElement("div");

container.classList.add("resultFlex")
playerTotal.classList.add("scoreTotal")
playerTotal.classList.add("reduceSize")
computerTotal.classList.add("scoreTotal")
computerTotal.classList.add("reduceSize")
vs.classList.add("logo")
playerTotal.classList.add("logo")
computerTotal.classList.add("logo")
vs.textContent = "VS"
playerCard.classList.add("card");
computerCard.classList.add("card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.dataset.sign;
    computerSelection = computerPlay();
    console.log(playerSelection,computerSelection)
    playRound(playerSelection,computerSelection)
  });
});

function computerPlay() {
  choice = ["rock", "paper","scissors"]
  return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection){
    updateScreen();
    displayResult("Tie Game!");
    displaySelection(`${playerSelection} equals ${computerSelection}`);
  }else if(
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ){
    computerScore += 1;
    updateScreen();
    displayResult("You Lose!");
    displaySelection(`${computerSelection} beats ${playerSelection}`);
  }else{
    playerScore += 1;
    updateScreen();
    displayResult("You Win!");
    displaySelection(`${playerSelection} beats ${computerSelection}`);
  }
}

function displayResult(s){
  title.textContent = s;
}

function displaySelection(s){
  para.textContent = "";
}

function updateScreen(){
  if (playerSelection == "rock"){
    playerCard.textContent = String.fromCodePoint(128511);
  }else if (playerSelection == "paper"){
    playerCard.textContent = String.fromCodePoint(128195);
  }else{
    playerCard.textContent = String.fromCodePoint(128298);
  }

  if (computerSelection == "rock"){
    computerCard.textContent = String.fromCodePoint(128511);
  }else if (computerSelection == "paper"){
    computerCard.textContent = String.fromCodePoint(128195);
  }else{
    computerCard.textContent = String.fromCodePoint(128298);
  }
  playerMark.textContent = `Player: ${playerScore}`;
  computerMark.textContent = `Computer: ${computerScore}`;
  playerTotal.appendChild(playerCard);
  playerTotal.appendChild(playerMark);
  computerTotal.appendChild(computerCard);
  computerTotal.appendChild(computerMark);
  container.appendChild(playerTotal);
  container.appendChild(vs);
  container.appendChild(computerTotal);
  left.appendChild(container);


}

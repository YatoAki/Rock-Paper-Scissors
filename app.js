function computerPlay() {
  choice = ["rock", "paper","scissors"]
  return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    return "You Lose! Paper beats Rock";
  }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
    return "You Win! Rock beats Scissors";
  }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    return "You Win! Paper beats beats Rock";
  }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    return "You Lose! Scissors beats Paper";
  }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    return "You Lose! Rock beats Scissors";
  }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    return "You Win! Scissors beats Paper";
  }else{
    return "It is a Tie!"
  }
}

function game() {
  for (let i = 0; i < 5 ; i++){
    userInput = prompt("Enter your choice: ")
    console.log(playRound(userInput,computerPlay()))
  }
}

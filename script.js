let choices = ["rock", "paper", "scissors"];
let gameStats = {wins: 0, losses: 0, ties: 0 };
let player = {choice: null };


function playRock(){
    player.choice="rock";
    playGame();
}


function playPaper(){
    player.choice="paper";
        playGame();
}


function playScissors(){
    player.choice = "scissors";
        playGame();
}



function playGame(){
  let isAlive = true;

  if (isAlive) {
    let computerChoice = getComputerChoice();
    document.getElementById("computer-choice").innerText =
      "Computer's Choice: " + computerChoice;
    document.getElementById("player-choice").innerText =
      "Your Choice: " + player.choice;
    compareChoices(player.choice, computerChoice);
  }
}



function compareChoices(playerChoice, compareChoice){
  if (playerChoice === compareChoice) {
    gameStats.ties++;
    displayMessage("It's a tie!");
  }else if (
    (playerChoice === "rock" && compareChoice === "scissors") ||
    (playerChoice === "paper" && compareChoice === "rock") ||
    (playerChoice === "scissors" && compareChoice === "paper")
  ){
    gameStats.wins++;
    displayMessage("You win! " + playerChoice  + " beats " + compareChoice + ".");
  }else {
    gameStats.losses++;
    displayMessage("You lose! " + compareChoice + " beats " + playerChoice + ".");
  }
  updateGameStats()
}

function getComputerChoice(){
return choices[Math.floor(Math.random() * choices.length)];
}



function displayMessage(msg){
    document.getElementById("message").innerText = msg;
}


function updateGameStats(){
    document.getElementById("game-stats").innerText = 
    "Wins: "+ gameStats.wins + "| Losses: "+gameStats.losses+ "| Ties: "+gameStats.ties;
}


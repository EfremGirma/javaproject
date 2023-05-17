let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateScoreElement();
// document.querySelector(".js-result").innerHTML = `${result}`;

/* if (!score) {
               score = {
                 Wins: 0,
                 Losses: 0,
                 Ties: 0,
               };
             }  */

function playGame(playerMove) {
  const computerMove = pickcomputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You Win!!!";
    } else if (computerMove === "scissor") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "rock") {
      result = "You Win!!!";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissor") {
      result = "You lose.";
    }
    //console.log(result);
  } else if (playerMove === "Rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissor") {
      result = "You Win!!!";
    }
    //console.log(result);
  }

  if (result === "You Win!!!") {
    score.Wins += 1;
  } else if (result === "You lose.") {
    score.Losses += 1;
  } else if (result === "Tie.") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-move").innerHTML = ` You
      <img class="move-icon" src="./rock-paper/${playerMove}-emoji.png" alt="" />
      <img class="move-icon" src="./rock-paper/${computerMove}-emoji.png" alt="" />
      Computer `;
  /*alert(
          `You picked ${playerMove}. Computer Picked ${computerMove}. ${result}
      Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}
                `
        );*/
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.Wins},  Losses:${score.Losses}, Ties:${score.Ties}`;
}

// one way we can assign the computer move outside the function to be global or we can return it

function pickcomputerMove() {
  const rand = Math.random();

  let computerMove = "";
  if (rand >= 0 && rand < 1 / 3) {
    computerMove = "rock";
  } else if (rand >= 1 / 3 && rand < 2 / 3) {
    computerMove = "paper";
  } else if (rand >= 2 / 3 && rand < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}


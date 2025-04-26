let rockBtn = document.querySelector("#btn-Rock");
let paperBtn = document.querySelector("#btn-Paper");
let scissorsBtn = document.querySelector("#btn-Scissors");
let displayP = document.querySelector("#display");
let dash = document.querySelector(".dash");
let dashBtn = document.querySelector("#dash-btn");
let playerCountDisplay = document.querySelector("#player-count-display");
let computerCountDisplay = document.querySelector("#computer-count-display");

let playerCount = 0;
let computerCount = 0;

function computerRandomChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * choices.length);
  console.log(choices[random]);
  return choices[random];
}

function theWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Its a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerCount++;
    playerCountDisplay.textContent = playerCount;
    return `You Win! ${playerChoice} Beats ${computerChoice}`;
  } else {
    computerCount++;
    computerCountDisplay.textContent = computerCount;
    return `You Lose ${computerChoice} Beats ${playerChoice}`;
  }
}

rockBtn.addEventListener("click", function () {
  let playerChoice = "Rock";
  let computerChoice = computerRandomChoice();
  let determineWinner = theWinner(playerChoice, computerChoice);
  displayP.textContent = determineWinner;
});

paperBtn.addEventListener("click", function () {
  let playerChoice = "Paper";
  let computerChoice = computerRandomChoice();
  let determineWinner = theWinner(playerChoice, computerChoice);
  displayP.textContent = determineWinner;
});

scissorsBtn.addEventListener("click", function () {
  let playerChoice = "Scissors";
  let computerChoice = computerRandomChoice();
  let determineWinner = theWinner(playerChoice, computerChoice);
  displayP.textContent = determineWinner;
});

dashBtn.addEventListener("click", function () {
  dash.style.opacity = 0;

  dash.addEventListener("transitionend", function hideDash() {
    dash.style.display = "none";
    dash.removeEventListener("transitionend", hideDash);
  });
});

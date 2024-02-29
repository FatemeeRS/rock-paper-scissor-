let handRandom;
let x = document.getElementById("result");
let yourScore = 0;
let computerScore = 0;
document.getElementById("you").innerHTML = yourScore;
document.getElementById("computer").innerHTML = computerScore;

const computerRandom = () => {
  const hand = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * hand.length);
  handRandom = hand[random];
};
const scoreNum = () => {
  const result = x.innerHTML;
  console.log(result);
  //   if (x === "same") {
  //     computerScore;
  //     yourScore;
  //   }
  if (result === "loser") {
    computerScore += 1;
  }
  if (result === "winner") {
    yourScore += 1;
  }
  if (yourScore === 10) {
    alert("you are winner");
    yourScore = 0;
    computerScore = 0;
    document.getElementById("result").innerHTML  = ""
  }
  if (computerScore === 10) {
    alert("you are loser");
    yourScore = 0;
    computerScore = 0;
    document.getElementById("result").innerHTML  = ""
  }
  document.getElementById("you").innerHTML = yourScore;
  document.getElementById("computer").innerHTML = computerScore;
};

const btnRock = () => {
  computerRandom();
  if (handRandom === "Rock") {
    x.innerHTML = "same";
  }
  if (handRandom === "Paper") {
    x.innerHTML = "loser";
  }
  if (handRandom === "Scissor") {
    x.innerHTML = "winner";
  }
  scoreNum();
};

const btnScissors = () => {
  computerRandom();
  if (handRandom === "Rock") {
    x.innerHTML = "loser";
  }
  if (handRandom === "Paper") {
    x.innerHTML = "winner";
  }
  if (handRandom === "Scissor") {
    x.innerHTML = "same";
  }
  scoreNum();
};

const btnPaper = () => {
  if (handRandom === "Rock") {
    x.innerHTML = "winner";
  }
  if (handRandom === "Paper") {
    x.innerHTML = "same";
  }
  if (handRandom === "Scissor") {
    x.innerHTML = "loser";
  }
  scoreNum();
};

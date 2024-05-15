document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".resetBtn").addEventListener("click", reset);
  document.querySelector(".btn1").addEventListener("click", play1);
  document.querySelector(".btn2").addEventListener("click", play2);
  document.querySelector(".btn3").addEventListener("click", play3);
  document.querySelector(".resetBtn").addEventListener("click", reset);
});

// let randomNb = Math.random();

function computerMove() {
  let randomNb = Math.random();
  if (randomNb <= 0.33) {
    return "rock";
  } else if (randomNb <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log(computerMove());

// let newDiv = document.createElement("div");
// document.appendChild(newDiv);
// newDiv.classList.add("div1");
let newDiv = document.createElement("div");

let resultP = document.createElement("p");

let win = 0;
let lose = 0;
let draw = 0;

// let a = document.querySelector(".vv");

// let newP = document.createElement("p");
// newDiv.appendChild(newP);
// newP.classList.add("p1");
let newP;

function calling() {
  document.body.appendChild(resultP);

  document.body.appendChild(newDiv);
  newDiv.classList.add("div1");
  newDiv.classList.add("hellox");

  newP = document.createElement("p");
  newDiv.appendChild(newP);
  newP.classList.add("p1");
}

function play1() {
  // newDiv = document.createElement("div");
  // document.body.appendChild(newDiv);
  // newDiv.classList.add("div1");

  // newP = document.createElement("p");
  // newDiv.appendChild(newP);
  // newP.classList.add("p1");

  calling();

  if (computerMove() === "rock") {
    newP.innerHTML = "It is a Draw 😒";
    draw++;
  } else if (computerMove() === "paper") {
    newP.innerHTML = "You Loose 😂";
    lose++;
  } else {
    newP.innerHTML = "You Won 🏆";
    win++;
  }
  // document.body.appendChild(resultP);
  resultP.innerHTML = seeResult();
}

//It is a Tie 😒
//You Loose 😂
//You Won 🏆

function play2() {
  calling();

  if (computerMove() === "rock") {
    newP.innerHTML = "You Won 🏆";
    win++;
  } else if (computerMove() === "paper") {
    newP.innerHTML = "It is a Draw 😒";
    draw++;
  } else {
    newP.innerHTML = "You Loose 😂";
    lose++;
  }
  // document.body.appendChild(resultP);
  resultP.innerHTML = seeResult();
}

function play3() {
  calling();

  if (computerMove() === "rock") {
    newP.innerHTML = "You Loose 😂";
    lose++;
  } else if (computerMove() === "paper") {
    newP.innerHTML = "You Won 🏆";
    win++;
  } else {
    newP.innerHTML = "It is a Tie 😒";
    draw++;
  }
  // document.body.appendChild(resultP);
  resultP.innerHTML = seeResult();
}

function reset() {
  // newDiv.classList.add("displayNone");
  //removed on;lu the last result of game only

  newDiv.innerHTML = "";
  win = 0;
  lose = 0;
  draw = 0;
  resultP.innerHTML = "";
}

// function reset() {
//   // Remove event listeners from buttons

//   // Remove newDiv from the DOM
//   if (newDiv && newDiv.parentNode) {
//     newDiv.parentNode.removeChild(newDiv);
//   }

//   // Reset newDiv and newP variables
//   newDiv = null;
//   newP = null;
//}

// function seeResult() {
//   return `Wins: ${win} - Draws: ${draw} - Loses: ${lose}`;
// }

function seeResult() {
  return `Wins: ${win} - Draws: ${draw} - Loses: ${lose}`;
}

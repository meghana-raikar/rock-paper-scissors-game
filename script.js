
let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector(".msgout");
const usermarks = document.querySelector("#userscore");
const compmarks = document.querySelector("#computerscore");


const computerchoice = () => {
    const arr = ["rock", "paper", "scissor"];
   const randomIdx = Math.floor(Math.random() *3);
   return arr[randomIdx];
}

const drawgame = () => {
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "black"
};



const showwinner = (userwin) => {
  if (userwin) {
    userScore++;
    usermarks.innerText = userScore;
    msg.innerText = "you win ! congratulations....";
    msg.style.backgroundColor = "green";

  } else {
    computerScore++;
    compmarks.innerText = computerScore;
    msg.innerText = "you lose :(  try again";
    msg.style.backgroundColor = "red";
  }
};



const printchoice = (userchoice) => {

    const compchoice = computerchoice();

    if(userchoice === compchoice) {
     drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
           userwin = compchoice === "paper"? false: true;
        } else if (userchoice === "paper") {
           userwin = compchoice === "scissor"? false: true;
        } else {
            userwin = compchoice ==="rock"? false : true;
        }

       showwinner(userwin);

    }

}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        printchoice(userchoice);
    });
});
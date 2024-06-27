let userScore =0;
let computerScore=0;

let choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compscore");

const genComputerChoice= () =>{
    // rock papper scissor
    const option = ["rock","papper","scissor"];
     const randidx = Math.floor(Math.random()*3);
     return option[randidx];
}

const playGame = (userchoice) =>{
 console.log("user choice = ", userchoice);
 // genetrate computer choice -> modular
 const compchoice =genComputerChoice();
 console.log("computer choice is =", compchoice);

 if(userchoice===compchoice){
     drawGame();
 }
 else {
  let userWin = true;
  if(userchoice==="rock"){
    userWin= compchoice==="papper"? false : true;
  }
   else if(userchoice==="papper"){
    userWin= compchoice==="scissor"? false : true;
   }
   else{
    userWin= compchoice==="rock"? false : true;
   }
   showWinner(userWin ,compchoice,userchoice);

 }    
 

};

const drawGame = ()=>{
    console.log("game is draw");
    msg.innerText ="match is draw"
    msg.style.backgroundColor = "yellow";

}

const showWinner = (userWin ,userchoice,compchoice)=>{
if(userWin){
    userScore++;
    userScorepara.innerText =userScore;
    console.log("you win !");
    msg.innerText =`you Win! ${compchoice} beats ${userchoice}`
    msg.style.backgroundColor = "green";

}
else{
    computerScore++;
    compScorepara.innerText=computerScore;
    console.log("you loos !",compchoice,"beated",userchoice);
    msg.innerText =`you loss! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "red";

}
}


choice.forEach((choice)=>{
   
    choice.addEventListener("click",() =>{
        const userchoice =choice.getAttribute("id")
        playGame(userchoice)

    });
});


    const computer=document.querySelector(".computerimg");
    const player=document.querySelector(".playerimg");
    const computerPoints=document.querySelector("computerPoints");
    const playerPoints=document.querySelector(".playerPoints");
    const option=document.querySelector(".option button");

  option.forEach((option)=> {
option.addEventListner("click",()=>{
   player.src = "./"+option.innnerHTML+"Playerc.png"
  });
});
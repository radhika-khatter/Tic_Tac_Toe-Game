let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newGame=document.querySelector(".new-game");
let restartBtn=document.querySelector(".restart-btn");


let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    }) 
});

let checkWinner=()=>{
    winPatterns.forEach((pattern)=>{
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                boxes.forEach((box)=>{
                    box.disabled=true;
                    showWinner(pos1Val);
                })
            }
            
        }
    })
}

let showWinner=(winner)=>{
    msg.innerText=`congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const resetGame=()=>{
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);
restartBtn.addEventListener("click",resetGame);
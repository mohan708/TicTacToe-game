

let music =new Audio("music.mp3");
let Audioturn =new Audio('ting.mp3');
let gameover =new Audio("gameover.mp3");

let turn = "X";
let gameOver = false;

const changeTurn = () =>{
   return turn === "X" ? "0" : "X";
}

// function to check win

const checkWin =()=>{
 let boxtest = document.getElementsByClassName("boxtext");
 let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ]
 win.forEach(e=>{
    if((boxtest[e[0]].innerText===boxtest[e[1]].innerText) && (boxtest[e[2]].innerText===boxtest[e[1]].innerText) && (boxtest[e[0]].innerText!== "")){
        document.querySelector('.info').innerText = boxtest[e[0]].innerText + " WON";
        gameOver=true;
        
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
    }
 })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === "")
        {
            boxtext.innerText =  turn;
          turn =   changeTurn();
          Audioturn.play();

          checkWin();
       if(!gameOver){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
       }
        }
    })
})

//  reset function 

reset.addEventListener('click',()=>{
    let boxtexts  = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn ="X";
     gameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";


})
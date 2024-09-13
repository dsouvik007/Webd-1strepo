let gameSeq=[];
let userSeq=[];

let started = false;
let highScore=0;
let level=0;
let colors=["red","green","yellow","blue"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("The game is started");
        started=true;
    }
    levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500)
}



let h2=document.querySelector("h2");
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randNo=Math.floor(Math.random()*3);
    let randColor=colors[randNo];
    let rndbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    //console.log(gameSeq);
    btnFlash(rndbtn);
}

function btnpress(){
    //console.log(this);
    let btn=this;
    btnFlash(btn);

    let usercolor=btn.getAttribute("id");
    //console.log(usercolor);
    userSeq.push(usercolor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            levelup();
        }
        console.log("same value");
    }else{
        h2.innerHTML=`game over <br> your score is: <b>${level}</b> 
         <br> highest score is: ${highestScore()}`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="burlywood";  
        },300);
        reset();
    }

}

let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }

function reset(){
    gameSeq=[];
    userSeq=[];
    started = false;
    level=0;
    highScore=highestScore();
}    
function highestScore(){
    if(highScore<level){
        highScore=level;
    }
    return highScore;
 }
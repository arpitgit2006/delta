let gameseq=[];
let userseq=[];
let btns=["red","green","blue","yellow"];
let start=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        level=0;
        userseq=[];
        gameseq=[];
        console.log("game started");
        levelup();
    }
});
function levelup(){
    level++;
    userseq=[];
    h3.innerText=`level: ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
    btnflash(randbtn);
    gameseq.push(randclr);
    console.log(gameseq);
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },300);
}
function btnpress(){
    let btn=this;
    userflash(btn);
    btn.classList.remove("userflash");
    clr=btn.getAttribute("class");
    userseq.push(clr);
    console.log(userseq);
    checkseq(userseq.length-1);
}
function checkseq(curr){
    if(gameseq[curr]==userseq[curr]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game over! your score was: ${level-1}<br><br>press any key to start again`;
        start=false;
        wrong();
    }
}
function wrong(){
    let body=document.querySelector("body");
    body.classList.add("wrong");
    setTimeout(function(){
        body.classList.remove("wrong");
    },200);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },300);
}
let allbtn=document.querySelectorAll("#box");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
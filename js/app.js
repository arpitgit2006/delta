let btn=document.querySelectorAll("button");
for(b of btn){
    b.onclick=btnclick;
    b.onmouseenter=function () {
        console.log('mouse has entered!');
    }
}
function btnclick(){
    alert("button is clicked!");
}
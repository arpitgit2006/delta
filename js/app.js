let btn=document.querySelectorAll("button");
for(b of btn){
    b.addEventListener("click",btnclick);
}
function btnclick(){
    alert("button is clicked!");
}
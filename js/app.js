function genran(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let ran=genran();
    let heading=document.querySelector("h3");
    heading.innerText=ran;
    let clr=document.querySelector("div");
    clr.style.backgroundColor=ran;
    this.style.backgroundColor=ran;
});
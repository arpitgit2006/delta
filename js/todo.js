let h1=document.querySelector("h1");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
let button=document.querySelector("#Add");
button.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    input.value="";
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerText="delete";
    item.append(delbtn);
    delbtn.addEventListener("click",function(){
        this.parentElement.remove();
    });
});


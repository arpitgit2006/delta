let obj = document.getElementById("main_img");
obj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3LwzNum_TP46r3exVSxLhhikSc8FEEqTQdFZ81n4KNp2yekEiPy90ghN&s=10";
let pa=document.getElementById("para");
console.dir(pa.innerText);
console.dir(pa.innerHTML); 
let box=document.querySelector('#box')
let input=document.querySelector('#input');
let button=document.querySelector('#button');
button.addEventListener('click',() => { console.log(input.value); })
let si=document.querySelector("#main_img");
si.getAttribute("id");
si.setAttribute("id","spidermanimg");
pa.style.color="pink";
let heading=document.querySelector("h1");
heading.classList.add("underline");
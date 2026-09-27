let h1=document.querySelector("h1");
function changeclr(color,delay,innerfn){
    setTimeout(()=>{
        h1.style.color=color;
        if(innerfn)
            innerfn();
    },delay);   
}
function start(){
    changeclr("red",1000,()=>{
        changeclr("yellow",1000,()=>{
            changeclr("green",1000,()=>{
                changeclr("blue",1000,()=>{
                    start();
                });
            });
        });
    });
}
start();

let url="https://icanhazdadjoke.com/";
async function getjoke() {
    try{
        let config={headers:{Accept: "application/json"}};
        let j=await axios(url,config);
        return j.data.joke;
    }
    catch(err){
        console.log(err);
    }
}
let btn=document.querySelector("button")
let p=document.querySelector("p");
btn.addEventListener("click",async ()=>{
    let j=await getjoke();
    p.innerHTML=j;
})
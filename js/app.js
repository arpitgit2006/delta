let url="https://catfact.ninja/fact";
async function getfact(){
    try{
        let fa= await axios.get(url);
        return fa.data.fact;
    }catch(err){
        return err;
    }
    
}
let fact=document.querySelector("#fact");
let btn=document.querySelector("#btn");
btn.addEventListener("click",async ()=>{
    let f=await getfact();
    fact.innerHTML=f;
})
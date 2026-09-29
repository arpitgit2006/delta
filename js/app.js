let url="http://universities.hipolabs.com/search?name=";
async function getclg(country) {
    try{
        let j=await axios(url+country);
        return j.data;
    }
    catch(err){
        console.log(err);
    }
}
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let list=document.querySelector("#list");
btn.addEventListener("click",async ()=>{
    let c=inp.value;
    let clg=await getclg(c);
    show(clg);
})
function show(clg){
    list.innerHTML="";
    for(c of clg){
        let item=document.createElement("li");
        item.innerHTML=c.name;
        list.appendChild(item);
    }
}
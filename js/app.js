let url="https://dog.ceo/api/breeds/image/random";
async function getimg(){
    try{
        let img = await axios.get(url);
        console.log(img.data.message);
        return img.data.message;
    }catch(err){
        return err;
    }
}
let img=document.querySelector("img");
let btn=document.querySelector("#btn");
btn.addEventListener("click",async ()=>{
    let f=await getimg();
    img.src=f;
})
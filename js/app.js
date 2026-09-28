let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// });
async function getfact(){
    try{
        let f1=await fetch(url);
        let data1=await f1.json();
        console.log(data1.fact);

        let f2=await fetch(url);
        let data2=await f2.json();
        console.log(data2.fact);
    }
    catch(err){
        console.log(err);
    }
}
getfact();
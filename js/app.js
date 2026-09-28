let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    res.json().then((ret)=>{
        console.log(ret.fact);
    })
})
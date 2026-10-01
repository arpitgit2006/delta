const express=require("express");
const app=express();
app.listen(3000,()=>{
    console.log(`app is lintening through port: 3000`);
})
app.use((req ,res)=>{
    console.log("request recieved");
    // res.send("response");
    // res.send({
    //     name: "arpit",
    //     id: "240032"
    // });
    let code="<h1>fruits</h1><ul><li>apple</li><li>banana</li><li>orange</li></ul>"
    res.send(code);
});
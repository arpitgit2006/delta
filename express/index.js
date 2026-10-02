const express=require("express");
const app=express();
app.listen(3000,()=>{
    console.log(`app is lintening through port: 3000`);
});
// app.use((req ,res)=>{
    // console.log("request recieved");
    // res.send("response");
    // res.send({
    //     name: "arpit",
    //     id: "240032"
    // });
    // let code="<h1>fruits</h1><ul><li>apple</li><li>banana</li><li>orange</li></ul>"
    // res.send(code);
// });
app.get('/',(req,res)=>{
        res.send("this is root path");
    });
    app.get("/search",(req,res)=>{
        res.send("this is search path");
    });
    app.get("/help",(req,res)=>{
        res.send("this is help path");
    });
    app.get("/contact",(req,res)=>{
        res.send("this is contact path");
    });
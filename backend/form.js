const express = require("express");
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>{
    console.log("app is listening");
});
app.get("/register",(req,res)=>{
    let {name,password}=req.query;
    res.send(`welcome ${name}`);
});
app.post("/register",(req,res)=>{
    console.log(req.body);
    let {name ,password}=req.body;
    res.send(`got post request, welcome ${name}`);
});
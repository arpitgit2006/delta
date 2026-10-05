const express = require("express");
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log("app is listening");
});
app.get("/register",(req,res)=>{
    res.send("got get request");
});
app.post("/register",(req,res)=>{
    res.send("got post request");
});
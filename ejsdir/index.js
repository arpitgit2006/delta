const express=require("express");
const port=8080;
const app=express();
const path = require("path");
app.listen(port,()=>{
    console.log("listening through ",port);
});
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});
app.get("/rolldice",(req,res)=>{
    let val=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ num: val});
});
app.get("/ig/:username",(req,res)=>{
    const user=req.params;
    const igdata=require("./data.json");
    const json=igdata[user.username];
    res.render("instagram.ejs",{data : json});
});
app.get("/",(req,res)=>{
    res.send("root path");
});

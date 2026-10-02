const express=require("express");
const port=8080;
const app=express();
app.listen(port,()=>{
    console.log("listening through ",port);
});
app.set("view engine","ejs");
app.get("/home",(req,res)=>{
    res.render("home.ejs");
});
app.get("/",(req,res)=>{
    res.send("root path");
});
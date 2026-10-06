const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.listen(port,()=>{
    console.log("app is listening");
});
app.get("/",(req,res)=>{
    res.send("server working well");
});
const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const posts=[
    {
        username: "apnacollege",
        content: "teaching rest api"
    },
    {
        username: "Arpit Sharma",
        content: "learning rest api"
    },
    {
        username: "akanksha",
        content: "talking to arpit"
    }
];
app.listen(port,()=>{
    console.log("app is listening");
});
app.get("/",(req,res)=>{
    res.send("server working well");
});
app.get("/posts/new",(req,res)=>{
    res.render("newpost.ejs");
});
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.post("/posts",(req,res)=>{
    posts.push(req.body);
    res.redirect("/posts");
});

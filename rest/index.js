const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const methodoverride=require("method-override");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodoverride("_method"));
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
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(post=>(post.username==id));
    post.content=req.body.content;
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(post=> post.username==id);
    res.render("edit.ejs",{post});
});
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(post=>(post.username==id));
    res.render("view.ejs",{post});
});

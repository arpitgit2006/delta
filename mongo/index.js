const express=require("express");
const app=express();
const mongoose = require('mongoose');
const path=require("path");
const chat = require("./models/chat.js");
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main()

.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}
app.get("/chats", async (req,res)=>{
    let chats= await chat.find();
    res.render("index.ejs",{chats});
    console.log(chats); 
});
app.get("/",(req,res)=>{
    res.send("app working");
});
app.listen(3000,()=>{
    console.log("app is listening")
});

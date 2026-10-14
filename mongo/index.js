const express=require("express");
const app=express();
const mongoose = require('mongoose');
const path=require("path");
const models=require("./models/chat.js");
const chat = require("./models/chat.js");
app.set("views",path.join(__dirname,"viewws"));
app.set("view engine","ejs");
main()

.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}
let chat1=new chat({from:"arpit", to:"anmol", message:"hi! Wassup", created_at:new Date() });
chat1.save().then((res)=>{
    console.log(res);
});
app.get("/",(req,res)=>{
    res.send("app working");
});
app.listen(3000,()=>{
    console.log("app is listening")
});

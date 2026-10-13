const mongoose=require("mongoose");
const { log } = require("node:console");
main()
.then(res =>{
    console.log("connnection succesfull");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userschema=new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const user=mongoose.model("user",userschema);
user.deleteOne({name:"anmol"}).then(res=>{
    console.log(res);
    
})
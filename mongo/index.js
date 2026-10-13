const mongoose=require("mongoose");
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
const user1=new user({name:"anmol", email:"anmol@gmail.com", age:19});
user1.save();
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
user.find({age: {$gte:20}}).then((data)=>{
    console.log(data);
})
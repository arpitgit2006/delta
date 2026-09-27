async function greet() {
    throw "a big A&& error";
    console.log("hello");
}
greet()
.then((result)=>{
    console.log("greeted successfully");
    console.log(result);
})
.catch((error)=>{
    console.log("error occured");
    console.log(error);
})

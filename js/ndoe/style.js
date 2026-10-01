import figlet from "figlet";
async function print() {
    let val=await figlet("Arpit Sharma");
    console.log(val);
}
print();
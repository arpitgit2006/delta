for(let i=0;i<5;i++){
    console.log(i);
}
console.log("running javascript with node.js");
let arg=process.argv;
for(let i=2;i<arg.length;i++){
    console.log(arg[i]);
}
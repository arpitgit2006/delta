function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            num=Math.floor(Math.random()*10);
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo(){
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    await getnum();
}
demo();
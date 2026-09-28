function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10);
            if(num>6)
                reject("rejected");
            console.log(num);
            resolve("resolved");
        },1000);
    });
}
async function demo(){
    try{
        await getnum();
        await getnum();
        await getnum();
        await getnum();
        await getnum();
    }
    catch(err){
        console.log(err);
    }
}
demo();
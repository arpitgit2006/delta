const mysql = require('mysql2');
const express=require("express");
const app=express();
app.set("view engine","ejs");
const port=8080;
async function main(){
    const { faker } = await import("@faker-js/faker");
    let data=[];
    const randomuser = () => {
        return [
            faker.string.uuid(),
            faker.internet.username(),
            faker.internet.email(),
            faker.internet.password(),
        ];
    };
    for(let i=0;i<100;i++){
        data.push(randomuser());
    }


    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'delta_app',
        password: 'MySQL'
    });

    // let q="INSERT INTO user(id,username,email,password) VALUES ?";
    // let user=[
    //     ["2","raj","raj@hotmail.com","raj@1234"],
    //     ["3","gunu","gunu@hotmail.com","gunu@1234"],
    //     ["4","oac","pac@hotmail.com","pac@1234"]
    // ];
    //     connection.query(q,[data],(err,res)=>{
    //     if(err){
        //     console.error(err);
        //     connection.end();
        //     return;
    //     }
    //     console.log(res);
    //     connection.end();
    //     });
    app.listen(port,()=>{
        console.log("app is listening");
    });
    app.get("/",(req,res)=>{
        let q="SELECT COUNT(*) FROM user";
        connection.query(q,(err,result)=>{
            if(err){
                console.error(err);
                res.send(err);
                connection.end();
                return ;
            }
            let count=result[0]["COUNT(*)"];
            res.render("home.ejs",{count});
        });
    });
    app.get("/user",(req,res)=>{
        let q="SELECT id,username,email FROM user";
        connection.query(q,(err,result)=>{
            let data=result;
            res.render("user.ejs",{data});
        });
    });
}
    main();
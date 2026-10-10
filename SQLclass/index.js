const mysql = require('mysql2');

// import { faker } from "@faker-js/faker";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'MySQL'
});
let q="INSERT INTO user(id,username,email,password) VALUES ?";
let user=[
    ["2","raj","raj@hotmail.com","raj@1234"],
    ["3","gunu","gunu@hotmail.com","gunu@1234"],
    ["4","oac","pac@hotmail.com","pac@1234"]
];
    connection.query(q,[user],(err,res)=>{
    if(err){
    console.error(err);
    connection.end();
    return;
    }
    console.log(res);
    connection.end();
    });


const random = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};
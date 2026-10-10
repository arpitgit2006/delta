const mysql = require('mysql2');

// import { faker } from "@faker-js/faker";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'MySQL'
});
    connection.query("SHOW TABLES",(err,res)=>{
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
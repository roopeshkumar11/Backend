// ESM


const { faker } = require('@faker-js/faker');  //GENERATE FAKE DATA SET
const mysql=require('mysql2')

const connection=mysql.createConnection({    //ACCESS DATA FROM WORKBENCH
    host:"localhost",
    user:"root",
    database:"DELTA_APP",
    password:"AIML22088"
})
let q="INSERT INTO user (id,username,email,password) VALUES ?" // ? IS PLACEHOLDER

let users=[["123b","123_newusernb","abc@gmail.comb","abcb"],
["123c","123_newusernc","abc@gmail.comc","abcc"]]

    try{
        connection.query(q,[users],(err,result)=>{
        if(err) throw err;
        console.log(result)
        console.log(result.length)
        console.log(result[0])
        console.log(result[1])
    });
 } catch(err){
        console.log(err)
    }
connection.end()
let getRandomuser=()=>{
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
   
  };
}

 
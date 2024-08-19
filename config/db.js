const mysql = require('mysql2');
const dotenv =require('dotenv')
dotenv.config()

const db = mysql  ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

});

db.connect((err) => {
    if(err){
        console.error('erro ao conectar ao banco de dados', err );
        return;


    }

    console.log('conexão realizada com sucesso')

})

module.exports = db;


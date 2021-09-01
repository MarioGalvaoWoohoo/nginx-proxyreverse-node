const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlInsert = `INSERT INTO people (name) value ('Mario')`
let newNome = connection.query(sqlInsert)

app.get('/', (req,res) => {

    const sql = `SELECT * FROM people`
    let nomes = connection.query(sql)
    connection.end()

    console.log(nomes);
    

    res.send('<h1>Full Cycle</h1><br>' + nomes.name)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
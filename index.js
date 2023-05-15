const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'poo'
})

app.get("/", (req, res) => {
    res.send("Hello Word!");
})

app.listen(port, () => {
    console.log(`El servidor esta andando en ${port}`);
})

connection.connect(function(err) {
    if(err){
        console.error(err.stack);
        return;
    }
    console.log("State " + connection.state);
});

connection.query("SELECT * FROM poo.autos;", function (error, results){
    if (error){
        console.error(error)
    }
    
    results.forEach(elemento => {
        console.log(elemento);
    })
});
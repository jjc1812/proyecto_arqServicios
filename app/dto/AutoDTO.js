import mysql from "mysql";
import Auto from "../objetos/Auto.js"

class AutoDTO {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'poo'
    });

    getAllAutos() {
        let autos = [];
        this.connection.query("SELECT * FROM poo.autos;", function (error, results){
            if (error){
                console.error(error)
            }
            
            results.forEach(elemento => {
                console.log(elemento);
            })
        });
    }
}

export default AutoDTO
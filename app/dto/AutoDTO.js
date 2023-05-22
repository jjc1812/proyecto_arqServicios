import mysql from "mysql";

class AutoDTO {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'poo'
    });

    getAllAutos() {
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
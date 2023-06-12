import mysql from "mysql";
import AutoMapping from "../mapping/AutoMapping.js";

class AutoDTO {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'poo'
    });

    async getAllAutos() {
        const autoMapping = new AutoMapping();
        try {
            const results = await new Promise((resolve, reject) => {
              this.connection.query("SELECT * FROM poo.autos;", function (error, results) {
                if (error) {
                  console.error(error);
                  reject(error);
                } else {
                  resolve(results);
                }
              });
            });
            
            const autosMap = results.map(elemento => autoMapping.convertAuto(elemento));
            return autosMap;
        } catch (error) {
            return error;
        }
    }
    async postAuto(auto) {
      try {
        const result = await new Promise((resolve, reject) => {
          this.connection.query(`INSERT INTO poo.autos (puertas, marca, ceroKM, fecha_fabricacion) VALUES (${auto.puertas}, '${auto.marca}', ${auto.ceroKM}, '${auto.fechaFabricacion}');`, function (error, result){
            if (error) {
              console.error(error);
              reject(error);
              return error;
            } else {
              resolve(result)
            }
          })
        });
        return result;
      } catch (error) {
        return error;
      }
    }
}

export default AutoDTO
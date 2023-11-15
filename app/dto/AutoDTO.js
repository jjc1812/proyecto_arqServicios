import mysql from "mysql";
import AutoMapping from "../mapping/AutoMapping.js";

class AutoDTO {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'poo'
    });

    getAllAutos() {
        const autoMapping = new AutoMapping();
        try {
            // const results = await new Promise((resolve, reject) => {
            //   this.connection.query("SELECT * FROM poo.autos;", function (error, results) {
            //     if (error) {
            //       console.error(error);
            //       reject(error);
            //     } else {
            //       resolve(results);
            //     }
            //   });
            // });

            const results = [{
              id_autos: 1,
              fecha_fabricacion: 169711355200,
              ceroKM: 0,
              marca: "fiat",
              puertas: 5
            },{
              id_autos: 2,
              fecha_fabricacion: 169560355200,
              ceroKM: 1,
              marca: "ford",
              puertas: 3
            },{
              id_autos: 3,
              fecha_fabricacion: 169760355200,
              ceroKM: 0,
              marca: "mercedes benz",
              puertas: 5
            },{
              id_autos: 4,
              fecha_fabricacion: 169063355200,
              ceroKM: 0,
              marca: "fiat",
              puertas: 3
            }]
            
            const autosMap = results.map(elemento => autoMapping.convertAuto(elemento));
            return autosMap;
        } catch (error) {
            return error;
        }
    }
    postAuto(auto) {
      try {
        // const result = await new Promise((resolve, reject) => {
        //   this.connection.query(`INSERT INTO poo.autos (puertas, marca, ceroKM, fecha_fabricacion) VALUES (${auto.puertas}, '${auto.marca}', ${auto.ceroKM}, '${auto.fechaFabricacion}');`, function (error, result){
        //     if (error) {
        //       console.error(error);
        //       reject(error);
        //       return error;
        //     } else {
        //       resolve(result)
        //     }
        //   })
        // });
        const result = "OK"
        return result;
      } catch (error) {
        return error;
      }
    }
}

export default AutoDTO
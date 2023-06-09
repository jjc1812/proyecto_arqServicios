import moment from "moment";
import AutoDTO from "../dto/AutoDTO.js";
import AutosUsados from "../objetos/AutosUsados.js";
import AutoMapping from "../mapping/AutoMapping.js";

class AutoService {
    async getAutos(){
        try {
            const autoDTO = new AutoDTO();
            const autos = await autoDTO.getAllAutos();
            let allAutos = [];
            autos.forEach(elemento => {
                if(elemento.getCeroKM() == 1)
                    elemento.setCeroKM(true)
                else
                    elemento.setCeroKM(false)
                allAutos.push(this.createAutoUsado(elemento))
            });
            return allAutos;
        } catch (error) {
            console.error(error);
        }
    }

    postAuto(auto) {
        if(!this.validaFecha(auto.fecha_fabricacion))
            return "ERROR_FECHA";
        if(!this.validaPuertas(auto.puertas))
            return "ERROR_PUERTAS";
        
        const autoMapping = new AutoMapping();
        const autoSave = autoMapping.convertAutoSave(auto);

        return "OK";
    }
    
    validaFecha(fecha_fabricacion) {
        const fecha_timestamp = parseInt(moment(Date(fecha_fabricacion)).format("X"));
        const fecha_hoy = parseInt(moment().format("X"));
        if(fecha_hoy<=fecha_timestamp) {
            console.error("La fecha es mayor al dia de hoy");
            return false;
        }
        return true;
    }

    validaPuertas(puertas) {
        if(puertas > 5 || puertas < 1) {
            console.error("No se coloco una cantidad de puertas en un rango aceptado");
            return false;
        }
        return true;
    }
    
    createAutoUsado(auto) {
        if(!auto.getCeroKM()) {
            let esFamiliar = false;
            if (auto.puerta > 3)
                esFamiliar = true
            const autoUsado = new AutosUsados(
                auto.idAuto, 
                moment(auto.fechaFabricacion).format("DD/MM/YYYY"),
                auto.ceroKM, 
                auto.marca, 
                auto.puerta, 
                auto.pagaPatente(), 
                esFamiliar
                );
            return autoUsado;
        }
        auto.setFechaFabricacion(moment(auto.fechaFabricacion).format("DD/MM/YYYY"))
        return auto;
    }
}

export default AutoService;
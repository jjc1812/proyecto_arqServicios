import moment from "moment";
import AutoDTO from "../dto/AutoDTO.js";
import AutosUsados from "../objetos/AutosUsados.js";

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
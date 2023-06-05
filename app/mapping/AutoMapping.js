import Auto from "../objetos/Auto.js";
import moment from "moment";

class AutoMapping {
    convertAuto(autoBase){
        const auto = new Auto(autoBase.id_autos, moment(autoBase.fecha_fabricacion).format(), autoBase.ceroKM, autoBase.marca, autoBase.puertas)
        return auto;
    }
}

export default AutoMapping;
import Auto from "../objetos/Auto.js";
import moment from "moment";
import AutoSave from "../objetos/AutoSave.js";

class AutoMapping {
    convertAuto(autoBase){
        const auto = new Auto(autoBase.id_autos, moment(autoBase.fecha_fabricacion).format(), autoBase.ceroKM, autoBase.marca, autoBase.puertas)
        return auto;
    }

    convertAutoSave(auto){
        const autoSave = new AutoSave(auto.fecha_fabricacion, auto.ceroKM, auto.marca, auto.puerta);
        autoSave.parseDate();
        autoSave.parseCeroKM();
        return autoSave;
    }
}

export default AutoMapping;
import Auto from "./Auto.js";

class AutosUsados extends Auto {
    constructor(id_auto, fecha_fabricacion, ceroKM, marca, puerta, paga_patente, familiar) {
        super(id_auto, fecha_fabricacion, ceroKM, marca, puerta);
        this.paga_patente = paga_patente;
        this.familiar = familiar;
    }

    setFamiliar(new_familiar){
        this.familiar = new_familiar;
    }
}

export default AutosUsados;
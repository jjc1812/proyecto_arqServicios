import moment from "moment";

class AutoSave {
    constructor(fecha_fabricacion, ceroKM, marca, puertas) {
        this.fechaFabricacion = fecha_fabricacion;
        this.ceroKM = ceroKM;
        this.marca = marca;
        this.puertas = puertas;
    }

    parseDate() {
        this.fechaFabricacion = moment(Date(this.fechaFabricacion)).format("YYYY-MM-DD");
    }

    parseCeroKM() {
        if(this.ceroKM)
            this.ceroKM = 1;
        else
            this.ceroKM = 0;
    }
}

export default AutoSave;
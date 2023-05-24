import moment from "moment";

class Auto {
    constructor (id_auto, fecha_fabricacion, ceroKM, marca, puerta) {
        this.idAuto = id_auto;
        this.fechaFabricacion = fecha_fabricacion;
        this.ceroKM = ceroKM;
        this.marca = marca;
        this.puerta = puerta;
    }

    pagaPatente() {
        const fechaUnix = moment(this.fechaFabricacion).format();
        const exento = 473040000;
        if(fechaUnix-exento < 0) return false;
        else return true;
    }

    getIdAuto() {
        return this.idAuto;
    }

    setCeroKM(setCeroKM){
        this.ceroKM = setCeroKM;
    }
}

export default Auto;
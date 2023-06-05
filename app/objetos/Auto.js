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
        const fechaUnix = moment(this.fechaFabricacion).format("X");
        const actual = moment().format("X");
        const exento = 4730400;
        if(fechaUnix > actual-exento) return true;
        else return false;
    }

    getIdAuto() {
        return this.idAuto;
    }

    getCeroKM() {
        return this.ceroKM;
    }

    setCeroKM(setCeroKM){
        this.ceroKM = setCeroKM;
    }

    setFechaFabricacion(newFechaFabricacion){
        this.fechaFabricacion = newFechaFabricacion;
    }
}

export default Auto;
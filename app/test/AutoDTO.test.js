import AutoDTO from "../dto/AutoDTO";

describe("Test de get all autos:", () => {
    it("deberia traerme el listado de autos.", () => {
        const autoDTO = new AutoDTO();

        const listado_autos = autoDTO.getAllAutos();

        expect(listado_autos).toHaveLength(4);
        expect(listado_autos[0].getCeroKM()).toBe(0);
        expect(listado_autos[1].getCeroKM()).toBe(1);
        expect(listado_autos[3].getIdAuto()).toBe(4);
        expect(listado_autos[3].marca).toBe("fiat");
        expect(listado_autos[3].puerta).toBe(3);
        expect(listado_autos[2].fechaFabricacion).toBe("1975-05-19T16:39:15-03:00");
    });
});

describe("Test de post autos:", () => {
    it("deberia guardame correctamente un auto en la base.", () => {
        const autoDTO = new AutoDTO();

        const auto = {
            fecha_fabricacion: "2022/10/24",
            cero_km: false,
            marca: "fiat",
            puertas: 5
          };
      
          const respuesta = autoDTO.postAuto(auto);
      
          expect(respuesta).toBe("OK");
    });
});
import AutoMapping from "../mapping/AutoMapping";

describe("Test de convertir al objeto auto:", () => {
    it("deberia convertir correctamente a un objeto auto", () => {
        const auto_mapping = new AutoMapping();

        const auto_base = {
            id_autos: 1,
            fecha_fabricacion: 169711355200,
            ceroKM: 0,
            marca: "fiat",
            puertas: 5
          }

        const auto = auto_mapping.convertAuto(auto_base);

        expect(auto.idAuto).toBe(1);
        expect(auto.fechaFabricacion).toBe("1975-05-19T03:02:35-03:00");
        expect(auto.ceroKM).toBeFalsy();
        expect(auto.marca).toBe("fiat");
        expect(auto.puerta).toBe(5);
    });
});

describe("Test de convertir al objeto autoSave:", () => {
    it("deberia convertir correctamente a un objeto autoSave", () => {
        const auto_mapping = new AutoMapping();

        const auto = {
            fecha_fabricacion: "2022/10/24",
            cero_km: false,
            marca: "fiat",
            puertas: 5
        };

        const auto_save = auto_mapping.convertAutoSave(auto);

        expect(auto_save.ceroKM).toBe(0);
        expect(auto_save.fechaFabricacion).toBe("2022-10-24");
        expect(auto_save.marca).toBe("fiat");
        expect(auto_save.puertas).toBe(5);
    });
});
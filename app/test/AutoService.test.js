import AutoService from "../servicio/AutoService";

describe('test de getAutos', () => {
  it('debería procesar correctamente los autos', async () => {
    const autoService = new AutoService();

    const autos = await autoService.getAutos();

    expect(autos).toHaveLength(4);
    expect(autos[0].getCeroKM()).toBe(false);
    expect(autos[1].getCeroKM()).toBe(true);
    expect(autos[3].getIdAuto()).toBe(4);
    expect(autos[3].marca).toBe("fiat");
    expect(autos[3].puerta).toBe(3);
  });
});

describe("test de postAuto", () => {
  const autoService = new AutoService();
  it("debería crearse un auto correctamente", () => {

    const auto = {
      fecha_fabricacion: "2022/10/24",
      cero_km: false,
      marca: "fiat",
      puertas: 5
    };

    const respuesta = autoService.postAuto(auto);

    expect(respuesta).toBe("OK");
  });
  
  it("debería validar la fecha correctamente", () => {

    const fecha_fabricacion = "2023-01-01";
    expect(autoService.validaFecha(fecha_fabricacion)).toBe(true);

    const fecha_fabricacionInvalida = "2122-01-01";
    expect(autoService.validaFecha(fecha_fabricacionInvalida)).toBe(false);
  });

  it("debería validar las puertas correctamente", () => {

    const puertasValidas = 4;
    expect(autoService.validaPuertas(puertasValidas)).toBe(true);

    const puertasInvalidas = 6;
    expect(autoService.validaPuertas(puertasInvalidas)).toBe(false);
  });
});

import AutoService from "../servicio/AutoService";

describe('test de get de autos:', () => {
  it('debería procesar correctamente los autos', () => {
    const autoService = new AutoService();

    const autos = autoService.getAutos();

    expect(autos).toHaveLength(4);
    expect(autos[0].getCeroKM()).toBeFalsy();
    expect(autos[1].getCeroKM()).toBeTruthy();
    expect(autos[3].getIdAuto()).toBe(4);
    expect(autos[3].marca).toBe("fiat");
    expect(autos[3].puerta).toBe(3);
    expect(autos[2].fechaFabricacion).toBe("19/05/1975");
    expect(autos[0].paga_patente).toBeFalsy();
    expect(autos[0].familiar).toBeTruthy();
  });
});

describe("test de post de autos:", () => {
  const autoService = new AutoService();

  it("deberia guarda un auto correctamente.", () => {

    const auto = {
      fecha_fabricacion: "2022/10/24",
      cero_km: false,
      marca: "fiat",
      puertas: 5
    };

    const resultado = autoService.postAuto(auto);

    expect(resultado).toBe("OK");
  });

  it("deberia cargar un auto con fecha invalida y devolver un error en la fecha", () => {

    const auto = {
      fecha_fabricacion: "2025/10/24",
      cero_km: false,
      marca: "fiat",
      puertas: 5
    };

    const resultado = autoService.postAuto(auto);

    expect(resultado).toBe("ERROR_FECHA");
  });

  it("deberia cargar un auto con puerta invalida y devolver un error en las puerta", () => {

    const auto = {
      fecha_fabricacion: "2022/10/24",
      cero_km: false,
      marca: "fiat",
      puertas: 15
    };

    const resultado = autoService.postAuto(auto);

    expect(resultado).toBe("ERROR_PUERTAS");
  });

  it("deberia funcionar correctamente la validacion de fecha.", () => {

    const fecha_valida = "2020/04/04";

    const resultado = autoService.validaFecha(fecha_valida);

    expect(resultado).toBeTruthy();

    const fecha_invalida = "2025/04/04";

    const error = autoService.validaFecha(fecha_invalida);

    expect(error).toBeFalsy();

  });

  it("deberia funcionar correctamente la validacion de puertas.", () => {
    const valida = autoService.validaPuertas(5);

    expect(valida).toBeTruthy();

    const error = autoService.validaPuertas(10);

    expect(error).toBeFalsy();
  })
});
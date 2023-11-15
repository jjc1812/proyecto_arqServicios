import AutoService from "../servicio/AutoService";

describe('test de getAutos', () => {
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

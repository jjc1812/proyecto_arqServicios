import AutoService from "../servicio/AutoService";

describe('AutoService', () => {
  it('debería procesar correctamente los automóviles', async () => {
    const autoService = new AutoService();

    const autos = await autoService.getAutos();

    expect(autos).toHaveLength(4);
    expect(autos[0].getCeroKM()).toBe(false);
    expect(autos[1].getCeroKM()).toBe(true);
  });
});

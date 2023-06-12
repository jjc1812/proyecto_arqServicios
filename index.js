import express from "express";
import AutoService from "./app/servicio/AutoService.js";
import bodyParser from "body-parser";

const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/auto", async (req, res) => {
    try {      
      const autoService = new AutoService();
      const autos = await autoService.getAutos();
      
      res.send(autos);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
});

app.post("/auto", (req, res) => {
  try {
    const autoService = new AutoService();
    const post = autoService.postAuto(req.body);
    switch (post) {
      case "ERROR_FECHA":
        res.status(403).send({message: "La fecha es mayor o igual al dia de hoy."});
        break;
      case "ERROR_PUERTAS":
        res.status(403).send({message: "La cantidad de puertas no esta en el rango de 1 a 5."});
        break;
      case "OK":
        res.status(200).send({message: "Se guardo con exito."});
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
})

app.listen(port, () => {
    console.log(`El servidor esta andando en ${port}`);
})
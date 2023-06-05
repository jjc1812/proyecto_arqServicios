import express from "express";
import AutoService from "./app/servicio/AutoService.js";

const app = express();
const port = 8080;

app.get("/auto", async (req, res) => {
    try {      
      const autoService = new AutoService();
      const autos = await autoService.getAutos();
      
      res.send(autos);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`El servidor esta andando en ${port}`);
})
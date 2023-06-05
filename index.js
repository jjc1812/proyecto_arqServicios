import AutoDTO from "./app/dto/AutoDTO.js";
import express from "express";

const app = express();
const port = 8080;

app.get("/", async (req, res) => {
    try {
      res.send("Hello World!");
      
      const autoDTO = new AutoDTO();
      const autos = await autoDTO.getAllAutos();
      
      console.log(autos);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`El servidor esta andando en ${port}`);
})
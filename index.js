import AutoDTO from "./app/dto/AutoDTO.js";
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello Word!");
    const autoDTO = new AutoDTO();
    autoDTO.getAllAutos()
})

app.listen(port, () => {
    console.log(`El servidor esta andando en ${port}`);
})
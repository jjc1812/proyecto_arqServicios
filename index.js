const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello Word!");
})

app.listen(port, () => {
    console.log(`El servidor esta andando en ${port}`);
})
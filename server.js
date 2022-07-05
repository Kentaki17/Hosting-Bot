const express = require("express");
const server = express();

server.all("/", (req, res) => {
    res.send("BOT Iniciado")
});

function keepAlive() {
    server.listen(3000, () => { console.log("BOT Iniciado") });
}

module.exports = keepAlive;

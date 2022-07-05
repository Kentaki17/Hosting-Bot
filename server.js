const express = require("express");
const server = express();

server.all("/", (req, res) => {
    res.send("K-Security Iniciado")
});

function keepAlive() {
    server.listen(3000, () => { console.log("K-Security Iniciado") });
}

module.exports = keepAlive;
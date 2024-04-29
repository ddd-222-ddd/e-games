const path = require("path");
const express = require("express");
const router = express.Router();

router.post("/formPost", (req, res) => {
    res.send("nome: " + req.body.nome);
});

module.exports = router;

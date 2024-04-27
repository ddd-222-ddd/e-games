const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/form", (req, res) => {
    res.send("formulario foda");
});

module.exports = router;

const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("ola mundo");
});

module.exports = router;

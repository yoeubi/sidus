var express = require("express");
var router = express.Router();
const { Test } = require("../models");

/* GET home page. */
router.get("/", async function(req, res, next) {
    try {
        const result = await Test.findAll();
        res.json(result);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;

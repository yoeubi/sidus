var express = require("express");
var router = express.Router();
const { Test } = require("../models");

/* GET users listing. */
router.get("/", async function(req, res, next) {
    await Test.create({
        name: "테스트중.."
    });
    res.redirect("/");
});

module.exports = router;

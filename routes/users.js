var express = require("express");
var router = express.Router();
const { Test } = require("../models");
const { isLoggedIn } = require("./middlewares");

/* GET users listing. */
router.get("/", isLoggedIn, async function(req, res, next) {
    const {
        name,
        email,
        job,
        duty,
        career,
        task,
        attachments,
        image
    } = req.user;
    res.json({ name, email, job, duty, career, task, attachments, image });
});

module.exports = router;

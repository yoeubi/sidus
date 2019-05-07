const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.post("/join", isNotLoggedIn, async (req, res, next) => {
    const {
        name,
        email,
        password,
        job,
        duty,
        career,
        task,
        attachments,
        image
    } = req.body;
    try {
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            return res.status(408).json("Email already exists");
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            name,
            email,
            password: hash,
            job,
            duty,
            career,
            task,
            attachments,
            image
        });
        return res.status(201).json("You are registered");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
    passport.authenticate("local", (authError, user, info) => {
        if (authError) {
            return next(authError);
        }
        if (!user) {
            res.status(404).json(info.message);
        }
        return req.login(user, loginError => {
            if (loginError) {
                return next(loginError);
            }
            return res.json("login success");
        });
    })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
    req.logout();
    res.json("logout success");
});

module.exports = router;

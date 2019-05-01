const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/", async (req, res, next) => {
    const { email } = req.body;
    try {
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            return res.status(408).json("이미 가입된 이메일입니다.");
        }
        await User.create({
            email
        });
        return res.status(201).json("가입되었습니다.");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;

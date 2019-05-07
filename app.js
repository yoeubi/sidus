var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const passport = require("passport");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const { sequelize } = require("./models");
const passportConfig = require("./passport");
const RedisStore = require("connect-redis")(session);

var app = express();
sequelize.sync();
passportConfig(passport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        store: new RedisStore({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            logErrors: true
        }),
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error("NOT FOUND");
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json(err.message);
});

module.exports = app;

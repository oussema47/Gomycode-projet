const express = require("express");
const { Register, login } = require("../controllers/userControllers");
const { isAuth } = require("../middlewares/auth");
const { RegisterValidation, loginValidation, validation } = require("../middlewares/validation");
const Router = express.Router();

Router.post("/register", RegisterValidation, validation, Register);

Router.post("/login", loginValidation, validation, login);
Router.get("/current", isAuth, (req, res) => {
    res.send({ user: req.user });
});

module.exports = Router;
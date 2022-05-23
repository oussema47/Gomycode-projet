const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const Admin = require('../models/Admin')

router.post('/registerAdmin', (req, res) => {
    Admin.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.json({ message: "Email already exists as Admin", type: "danger", title: "Error" })
        if (!doc) {
            User.findOne({ email: req.body.email }, async (err, docName) => {
                if (err) throw err;
                if (docName) res.json({ message: "Email already exists as User", type: "danger", title: "Error" })
                if (!docName) {
                    email = req.body.email
                    if (err) { console.log(err) }
                    else {
                        let newUser = new Admin({
                            userName: req.body.username,
                            email: req.body.email,
                        })
                        newUser.password = newUser.hashPassword(req.body.password)
                        await newUser.save();
                        res.json({ message: "Your account has been created successfully as Admin. You can login now.", type: "success", title: "Success", user: newUser })
                    }
                }
            })
        }
    })
})
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.json({ message: "Email already exists as User", type: "danger", title: "Error" })
        if (!doc) {
            Admin.findOne({ email: req.body.email }, async (err, docName) => {
                if (err) throw err;
                if (docName) res.json({ message: "Email already exists as Admin", type: "danger", title: "Error" })
                if (!docName) {
                    email = req.body.email
                    if (err) { console.log(err) }
                    else {
                        let newUser = new User({
                            userName: req.body.username,
                            email: req.body.email,
                        })
                        newUser.password = newUser.hashPassword(req.body.password)
                        await newUser.save();
                        res.json({ message: "Your account has been created successfully. You can login now.", type: "success", title: "Success", user: newUser })
                    }
                }
            })
        }
    })
})

router.post('/logIn', (req, res) => {
    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
            if (doc.comparePasswords(req.body.password, doc.password)) {
                if (err) { return done(err); }
                userLogin = { "id": doc._id, "name": doc.userName, "email": doc.email }
                res.json({ message: "Welcome", type: "success", title: "Success", user: userLogin })
            } else {
                res.json({ message: "Password is wrong.", type: "danger", title: "Error" })

            }
        }
        if (!doc) {
            Admin.findOne({ email: req.body.email }, async (err, docAdmin) => {
                if (err) throw err;
                if (docAdmin) {
                    if (docAdmin.comparePasswords(req.body.password, docAdmin.password)) {
                        if (err) { return done(err); }
                        userLogin = { "id": docAdmin._id, "name": docAdmin.userName, "email": docAdmin.email, "role": "Admin" }
                        res.json({ message: "Welcome", type: "success", title: "Success", user: userLogin })
                    } else {
                        res.json({ message: "Admin Password is wrong.", type: "danger", title: "Error" })

                    }
                }
                if (!docAdmin) {
                    res.json({ message: "User not found", type: "danger", title: "Error" })
                }

            })
        }
    })
})

router.get('/getAll', (req, res) => {
    User.find({}, (err, listUsers) => {
        if (!err) {
            res.json(listUsers)
        } else (
            res.json(err)
        )
    })
})


module.exports = router
/*const express = require("express");
const { Register, login } = require("../controllers/userControllers");
const { isAuth } = require("../middlewares/auth");
const { RegisterValidation, loginValidation, validation } = require("../middlewares/validation");
const Router = express.Router();

Router.post("/register", RegisterValidation, validation, Register);

Router.post("/login", loginValidation, validation, login);
Router.get("/current", isAuth, (req, res) => {
    res.send({ user: req.user });
});

module.exports = Router;*/
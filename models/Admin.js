const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
const Adminchema = new mongoose.Schema({
    userName: String,
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: String,
});

Adminchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

Adminchema.methods.comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

let Admin = mongoose.model('Admin', Adminchema, 'Admins')

module.exports = Admin
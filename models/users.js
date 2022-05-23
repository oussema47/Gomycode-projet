const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
const Userchema = new mongoose.Schema({
    userName: String,
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: String,
});

Userchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

Userchema.methods.comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

let User = mongoose.model('User', Userchema, 'Users')

module.exports = User
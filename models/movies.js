const mongoose = require("mongoose");

const Movie = new mongoose.Schema({
    name: String,
    description: String,
    categorie: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

});
module.exports = mongoose.model("movie", Movie);
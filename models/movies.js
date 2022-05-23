const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    images: {
        type: String,
        required: true
    }, watched: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
let Movie = mongoose.model('Movie', movieSchema, 'Movies')

module.exports = Movie
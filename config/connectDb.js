const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database is connected");
    } catch (error) {
        console.log("database is not connection");
    }
};
module.exports = connectDB;
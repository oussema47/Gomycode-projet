
const express = require("express");
const connectDB = require("./config/connectDb");
const Router = require("./routes/userRoute");
const movieRouter = require("./routes/movieRoutes");
const app = express();


const PORT = process.env.PORT || 6000;


connectDB();

//routes
app.use(express.json())
app.use("/api/users", Router);
app.use("/api/movies", movieRouter);


app.listen(
     PORT,
     console.log(`server is up running on http://localhost:${PORT} `));
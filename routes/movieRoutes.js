const express = require("express");
const { isAuth } = require("../middlewares/auth");
const movies = require("../models/movies");

const movieRouter = express.Router();

movieRouter.post("/addMovie", isAuth, async (req, res) => {
    try {
        const movie = new movies({ ...req.body, userId: req.user.id });
        await movie.save();

        res.status(200).send({ msg: "movie added successfully", movie })
    } catch (error) {
        res.status(500).send("could not add movie");
    }
});
movieRouter.get("/", async (req, res) => {
    try {
        const moviess = await movies.find().populate("userId");
        res.status(200).send({ msg : "list of movies", moviess });
    } catch (error) {
        res.status(500).send("could not get movies");
    }
});

movieRouter.get("/mymovies", isAuth, async (req, res) => {
    try {

        const mymovies = await movies.find({ userId: req.user.id});
        res.status(200).send({ msg: "my movies", mymovies});
    } catch (error) {
        res.status(500).send("could not get my movies");
    }
});




module.exports = movieRouter;
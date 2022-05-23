const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')

router.post('/addMovie', (req, res) => {
    let newMovie = new Movie({
        title: req.body.title,
        description: req.body.description,
        images: req.body.images
    })
    newMovie.save();
    res.json({ message: "Movie has been created successfully.", type: "success", title: "Success" })
})

router.get('/getAll', (req, res) => {
    Movie.find({}, (err, list) => {
        if (!err) {
            res.json(list)
        } else (
            res.json(err)
        )
    })
})
router.get('/getWatched', (req, res) => {
    Movie.find({ watched: true }, (err, list) => {
        if (!err) {
            res.json(list)
        } else (
            res.json(err)
        )
    })
})
router.patch('/update/:id', (req, res) => {
    Movie.findOne({ _id: req.params.id }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
            let movie = doc
            movie.title = req.body.title
            movie.description = req.body.description
            movie.images = req.body.images
            let query = { _id: doc._id }
            Movie.updateOne(query, movie, (err) => {
                if (!err) {
                    res.json({
                        message: "movie updated successfully",
                        type: "success",
                        title: "Success"
                    })
                } else {
                    console.log(err)
                    res.json({
                        message: "Server Error",
                        type: "error",
                        title: "Error"
                    })
                }
            })
        }
        if (!doc) res.json({ message: "Your don't have any movie !", type: "danger", title: "Error" })
    })
})
router.patch('/watch/:id', (req, res) => {
    Movie.findOne({ _id: req.params.id }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
            let movie = doc
            movie.watched = !movie.watched
            let query = { _id: doc._id }
            Movie.updateOne(query, movie, (err) => {
                if (!err) {
                    res.json({
                        message: "movie updated successfully",
                        type: "success",
                        title: "Success"
                    })
                } else {
                    console.log(err)
                    res.json({
                        message: "Server Error",
                        type: "error",
                        title: "Error"
                    })
                }
            })
        }
        if (!doc) res.json({ message: "Your don't have any movie !", type: "danger", title: "Error" })
    })
})
router.get('/getMovie/:id', (req, res) => {
    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (!err) {
            res.json(movie)
        } else (
            res.json(err)
        )
    })
})

router.delete('/delete/:id', (req, res) => {

    let query = { _id: req.params.id }

    Movie.deleteOne(query, (err) => {

        if (!err) {
            res.json({
                message: "Movie deleted successfully",
                type: "success",
                title: "Success"
            })
        } else {
            res.json({
                message: "Server error",
                type: "danger",
                title: "Error"
            })
        }
    })
})

module.exports = router

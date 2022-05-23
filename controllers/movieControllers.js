const movies = require('../models/movies')

class APIfeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }
    filtering() {
        const queryObj = { ...this.queryString }   // queryString =  req.query
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete (queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))



        return this
    }

    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('created at')

        }
        return this
    }

    pagination() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 20
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}


const movieCtrl = {
    getMovies: async (req, res) => {
        try {
            console.log(req.query)
            const features = new APIfeatures(Movies.find(), req.query)
                .filtering().sorting().pagination()
            const movies = await features.query

            res.json({
                status: 'succes',
                result: movies.length,
                movies: movies
            })


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    movieDetail: async (req, res) => {
        try {
            const movie = await movies.findById(req.params.id)
            res.send(movie)

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    createMovie: async (req, res) => {
        try {
            const { movie_id, title, description,  images, category } = req.body
            // if(!images )  return res.status(400).json({msg: "No image upload"})

            const movie = await movies.findOne({ movie_id })
            if (movie) return res.status(400).json({ msg: "This movie already exists." })

            const newMovie = new movies({
                movie_id, title, description, images, category
            })

            await newMovie.save()
            res.json({ msg: 'created a movie' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteMovie: async (req, res) => {
        try {
            await movies.findByIdAndDelete(req.params.id)
            res.json({ msg: 'deleted a movie' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateMovie: async (req, res) => {
        try {
            const { movie_id, title, description, images, category } = req.body
            // if(!images )  return res.status(400).json({msg: "No image upload"})

            const movie = await movies.findOneAndUpdate(req.params.id, { ...req.body })
            res.json({ msg: 'Updated a Movie', movie: movie })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }

}

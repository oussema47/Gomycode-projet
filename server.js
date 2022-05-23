
const express = require("express");
const app = express()
const bodyParser = require('body-parser')
const db = require("./config/connectDb");
const upload = require("./routes/upload");
const mongoose = require('mongoose')
const Grid = require("gridfs-stream");

const PORT = process.env.PORT || 5000;

let gfs, gridfsBucket;
db();

const conn = mongoose.connection;
conn.once("open", () => {
     gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
          bucketName: "photos"
     });

     gfs = Grid(conn.db, mongoose.mongo);
     gfs.collection("photos");
});
//upload file
app.use("/file", upload);
// media routes
app.get("/file/:filename", async (req, res) => {
     try {
          const file = await gfs.files.findOne({ filename: req.params.filename });
          const readStream = gridfsBucket.openDownloadStream(file._id)
          readStream.pipe(res);
     } catch (error) {
          res.send("not found");
          console.log(error)
     }
});

//routes
app.use(express.json())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
const user = require('./routes/userRoute')
app.use('/user', user)
const movie = require('./routes/movieRoutes')
app.use('/movie', movie)

app.listen(
     PORT,
     console.log(`server is up running on http://localhost:${PORT} `));
module.exports = app
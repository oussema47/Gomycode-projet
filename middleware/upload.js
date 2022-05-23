const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const dotenv = require('dotenv');

dotenv.config();

// mongodb environment variables
const {
    MONGO_URL
} = process.env;

const storage = new GridFsStorage({
    url: MONGO_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-avatar-User-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-avatar-User-${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });
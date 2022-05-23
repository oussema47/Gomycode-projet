const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single('avatar'), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    else {
        const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
        console.log(imgUrl)
        return res.send(imgUrl);
    }

});

module.exports = router;
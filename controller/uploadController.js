const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const uploadController = async (req, res) => {
  // req.file is the `image` file
  // req.body will hold the text fields, if there were any
  if (req.file) {
    res
      .status(200)
      .json({ message: "File uploaded successfully", file: req.file });
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
};

module.exports = { uploadController, upload };

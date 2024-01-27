const express = require("express");
const router = express.Router();
const { adminAuth, userAuth } = require("../middleware/authentication");
const { uploadController, upload } = require("../controller/uploadController");

router.route("/upload").post(userAuth, upload.single("file"), uploadController);

module.exports = router;

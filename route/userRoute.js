const express = require("express");
const router = express.Router();
const { adminAuth, userAuth } = require("../middleware/authentication");

const { getAllUsers, getUserById } = require("../controller/UserController");

router.route("/getAllUsers").get(adminAuth, getAllUsers);
router.route("/:id").get(adminAuth, getUserById);

module.exports = router;

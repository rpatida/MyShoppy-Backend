const express = require("express");
const router = express.Router();
const { createUser, getUsers, auth } = require("../controllers/userController");

router.route("/users").get(getUsers);
router.route("/user/new").post(createUser);
router.route("/login").post(auth);

module.exports = router;

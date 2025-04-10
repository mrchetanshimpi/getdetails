const express = require("express");
const { userLogin, userRegister } = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();

router.route("/login").post(isAuthenticated, userLogin);
router.route("/register").post(isAuthenticated, userRegister);

module.exports = router;

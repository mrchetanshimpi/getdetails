const express = require("express");
const { userLogin, userRegister } = require("../controllers/user.controller");
const router = express.Router();

router.route("/login").post(userLogin);
router.route("/register").post(userRegister);

module.exports = router;

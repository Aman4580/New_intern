const express = require("express");

const router = express.Router();
const { signupUser } = require('../controller/user-controller.js'); // Corrected spelling
const { signinUser } = require('../controller/user-controller.js'); // Corrected spelling

router.post('/signup', signupUser); // Corrected spelling
router.post('/signin', signinUser); // Corrected spelling
module.exports = router;

const express = require('express');
const { registerUser, verifyOtp, loginUser } = require('../Controller/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyOtp);
router.post('/login', loginUser);

module.exports = router;

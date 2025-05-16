const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.get('/google/callback', authController.googleLogin)

module.exports = router

// https://accounts.google.com/o/oauth2/auth?client_id=57920510271-53632el4r6trhgmv72f0bn01ljui923e.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline
// το client id απο το γκουγκλ
// το uri απο το γκουγκλ
// το responce_type απο το auth.service

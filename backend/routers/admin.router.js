const express = require('express');
const router = express.Router();
const appController=require('../controllers/app.controller');

router.route('/login')
    .post(appController.login);
router.route('/register')
    .post(appController.register);
router.route('/logout')
    .get(appController.logout);


module.exports = router;
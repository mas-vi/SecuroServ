const express = require('express');
const router = express.Router();
const jwtMiddleware=require('../middleware/jwt.middleware');
const appController=require('../controllers/controller.app');

router.route('/')
    .get(jwtMiddleware.verify,appController.getTest);
router.route('/login')
    .post(appController.login);
router.route('/register')
    .post(appController.register);
router.route('/logout')
    .get(appController.logout);


module.exports = router;
const express = require('express');
const router = express.Router();
const jwtMiddleware=require('../middleware/jwt.middleware');
const appController=require('../controllers/app.controller');
const tableController=require('../controllers/table.controller');


router.route('/')
    .get(jwtMiddleware.verify,appController.getTest);

router.route('/login')
    .post(appController.login);
router.route('/register')
    .post(appController.register);
router.route('/logout')
    .get(appController.logout);
router.route('/incidents/:limit')
    .get(jwtMiddleware.verify,tableController.getTable1);
router.route('/responses/:id')
    .get(jwtMiddleware.verify,tableController.getResponseByID);


module.exports = router;
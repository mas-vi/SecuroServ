const express = require('express');
const router = express.Router();

const testController=require('../controllers/controller.test');

router.get('/',testController.getTest);


module.exports = router;
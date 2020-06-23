const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/addUser',userController.adduserConroller)
router.get('/getUser',userController.getUserController)

module.exports = router
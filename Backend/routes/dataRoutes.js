const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.post('/Login', dataController.LoginUser);
router.get('/user', dataController.user);


module.exports = router;
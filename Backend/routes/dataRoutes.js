const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.post('/Login', dataController.loginUser);
router.get('/user', dataController.user);
router.get('/getcliente', dataController.getcliente)
router.post('/AddUser', dataController.AddUser)


module.exports = router;
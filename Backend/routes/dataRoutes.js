const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.post('/Login', dataController.loginUser);
router.get('/user', dataController.user);
router.get('/getcliente', dataController.getcliente)
router.post('/AddUser', dataController.AddUser)
router.put('/UpdateUser/:id', dataController.UpdateUser);
router.post('/AddFormData', dataController.AddFormData) 

module.exports = router;
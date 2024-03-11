const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.post('/Login', dataController.loginUser);
router.get('/user', dataController.user);
router.get('/getcliente', dataController.getcliente)
router.post('/AddUser', dataController.AddUser)
router.put('/UpdateUser/:id', dataController.UpdateUser);
router.post('/AddFormData/:id', dataController.AddFormData) 
router.put('/Estado/:id', dataController.Estado);

module.exports = router;
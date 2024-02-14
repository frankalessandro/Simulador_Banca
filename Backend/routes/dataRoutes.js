const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/products', dataController.getProducts);
router.post('/registerUser', dataController.registerUser);
router.post('/loginUser', dataController.loginUser);

module.exports = router;
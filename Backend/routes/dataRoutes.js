const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.post('/Login', dataController.loginUser);
router.get('/user', dataController.user);
router.get('/getclienteP', dataController.getPendiente)
router.get('/getclienteA', dataController.getAutorizado)
router.get('/getclienteD', dataController.getDenegado)
router.post('/AddUser', dataController.AddUser)
router.put('/UpdateUser/:id', dataController.UpdateUser);
router.post('/AddFormData/:id', dataController.AddFormData);
router.put('/Estado/:id', dataController.Estado);
router.put('/EstadoD/:id', dataController.EstadoD);
router.get('/getDetalle',dataController.getDetalle)
router.get('/getcliente/:userName', dataController.getcliente);
router.delete('/user/:userId', dataController.DelateUser )
router.get('/getBusqueda', dataController.getBusqueda )
router.get('/getInfoCliente/:accountNumberInt', dataController.getInfoCliente);
router.put('/UpdateCliente/:id', dataController.UpdateCliente);

// Nuevas rutas para búsqueda flexible y movimientos
router.get('/clienteByQuery', dataController.clienteByQuery);
router.post('/cliente/:id/deposit', dataController.depositCliente);
router.post('/cliente/:id/withdraw', dataController.withdrawCliente);

module.exports = router;

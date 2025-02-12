const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Asegúrate de importar correctamente el controlador

// Ruta para actualizar un usuario (PUT)
router.put('/:id', userController.updateUser); // Aquí debe estar definido el método updateUser

module.exports = router;

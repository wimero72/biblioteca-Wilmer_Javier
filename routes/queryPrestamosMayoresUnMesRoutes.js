const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/prestamosController');

// Consulta Prestamo libros morosos +1mes
router.get('/', prestamosController.getPrestamosLibrosMoraMasdeUnMes);

module.exports = router;

const express = require('express');
const path = require('path');
const router = express.Router();

// 1. Ruta de inicio / Login (Autenticación)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

// 2. Ruta de órdenes con consecutivos y estado de sedes
router.get('/ordenes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/ordenes.html'));
});

// 3. Ruta del formulario de registro (Fotos Antes, Durante y Después)
router.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/registro.html'));
});

module.exports = router;
const express = require('express');
const path = require('path');
const mantenimientoRoutes = require('./routes/mantenimiento.routes');

const app = express();

// Middleware para servir las vistas estáticas HTML
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enrutamiento modular del sistema de mantenimiento
app.use('/', mantenimientoRoutes);

module.exports =app;

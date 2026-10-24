const app = require('./app/server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Claro ejecutándose en http://localhost:${PORT}`);
});

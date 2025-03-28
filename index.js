const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
}); //Comentario para implementar la rama endpoint-root

app.get('/saludo/:nombre', (req, res) => {
    res.send(`Hola, ${req.params.nombre}!`);
}); //Comentario para implementar la rama endpoint-saludo

app.post('/mensaje', (req, res) => {
    res.json({ mensaje: `Recibido: ${req.body.mensaje}` });
}); //Comentario para implementar la rama endpoint-mensaje

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
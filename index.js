'use strict';
// npm install --save esm
// nodemon -r esm index.js

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4005;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {
    res.status(200).send({
        mensaje: 'Ruta GET product: OK',
        products: [{marca: 'Puma', Precio: 200}]
    });
});

app.get('/api/product/:productId', (req, res) => {
    res.send(`Ruta GET product con parametro': ${req.params.productId}`);
});

app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.status(200).send({mensaje: 'Ruta POST product OK'});
});


// Hace actualizaciones PUT
app.put('/api/product/:productId', (req, res) => {
    res.send(`Ruta: PUT product con parametro': ${res.params.productId}`);
});

// Hace borrar DELETE
app.delete('/api/product/:productId', (req, res) => {
    res.send(`Ruta PUT product con parametro': ${req.params.productId}`);
});

app.listen(port, () => {
    console.log(`Api REST port: ${port}`)
});

'use strict';
// npm install --save esm
// nodemon -r esm index.js
import express from 'express';
import CRUD from "../controllers/products";

const api_ROUTER = express.Router();

// Hace consulta GET x Muestra todos los Productos
api_ROUTER.get('/product', CRUD.get_CONSULTA_ALL);

// Hace consulta GET x Producto
api_ROUTER.get('/product/:productId', CRUD.get_CONSULTA_ID);

// Hace consulta POST
api_ROUTER.post('/product', CRUD.post_ALTA);

// Hace actualizaciones PUT
api_ROUTER.put('/product/:productId', CRUD.put_MODIFICACION_ID);

// Hace borrar DELETE
api_ROUTER.delete('/product/:productId',CRUD.delete_BAJA_ID);

export default api_ROUTER;

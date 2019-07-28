'use strict';
import Product from "../models/product"
import mongoose from "mongoose";

// Hace la consulta - GET x todos los Productos
function get_CONSULTA_ALL (req, res){
    Product.find({}, (err, product) => {
        if (err) return res.status(500).send({mensaje: `Error 500: en la peticion al servidor. ${err}`});
        if (!product) return res.status(404).send({mensaje: `La Tabla no existe ${product}`});
        res.status(200).send({product: product});
    })
}

// Hace la consulta - GET x Producto
function get_CONSULTA_ID (req , res){
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({mensaje: `Error en peticion ${err}`});
        if (!product) return res.status(404).send({mensaje: `El producto no existe ${product}`});
        res.status(200).send({product: product});
    })
}

// Hace la alta - POST
function post_ALTA(req, res){
    console.log('POST /api/product');
    console.log(req.body);

    let product = new Product();

    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
        if (err) {
            return res.status(500).send({mensaje: `Error al grabar en la DB: ${err}`});
        } else {
            res.status(200).send({product: productStored});
        }
    });
}

// Hace las modificaciones - PUT
function put_MODIFICACION_ID (req, res){
    let productId = req.params.productId;
    let update_producto = req.body;

    Product.findByIdAndUpdate(productId,update_producto ,(err, productUpdated) => {
        if (err) return res.status(500).send({mensaje: `Error en peticion ${err}`});
        res.status(200).send({product: productUpdated});
    });
}

// Hace la baja - DELETE
function delete_BAJA_ID (req, res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({mensaje: `Error en peticion ${err}`});

        product.remove(err => {
            if (!product) return res.status(404).send({mensaje: `El producto no existe ${product}`});
            res.status(200).send({mensaje: `El producto ${product._id} ha sido borrado`});
        })
    })
}

export default  {
    get_CONSULTA_ALL,
    get_CONSULTA_ID ,
    post_ALTA,
    put_MODIFICACION_ID,
    delete_BAJA_ID
};

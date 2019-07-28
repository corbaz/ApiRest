'use strict';
// npm install --save esm
// nodemon -r esm index.js

import mongoose from 'mongoose';
import app from './config_express';
import config_mongodb from './config_mongodb'

//conexion a Mongodb
mongoose.connect(config_mongodb.db, (err, res) => {
    if (err) {
        return console.log(
            `Conexion NO establecida a MongoDB: 
             ERROR: ${err}`);
    }
    console.log('Conexion establecida a la Base de Datos');

    // Empieza a escuchar al Servidor Express
    app.listen(config_mongodb.port, () => {
        console.log(`Api REST port: ${config_mongodb.port}`);
    });
});

'use strict';
// npm install --save esm
// nodemon -r esm index.js

import express from 'express';
import bodyParser from 'body-parser';
import api_ROUTER from "./routers/index";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', api_ROUTER);

export default app;

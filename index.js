// npm install --save esm
// nodemon -r esm index.js

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port= process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Api REST sobre el port: ${port}`)
});

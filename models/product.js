'use strict';

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: {type: String, default: "PC"},
    picture: {type: String, default: "PC.png"},
    price: {type: Number, default: 0},
    category: {type: String, enum: ['computers', 'phone', 'accesories'], default: "computers"},
    description: {type: String, default: "Descripcion: PC"},
});

export default mongoose.model('Product', ProductSchema);


const moongoose = require('mongoose');

const ProductSchema = new moongoose.Schema({
    title: {type: String, required: true},
    supplier: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    productLocation: {type: String, required: true},
    title: {type: String, required: true},
})
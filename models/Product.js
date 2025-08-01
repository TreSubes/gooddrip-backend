const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    marca: { type: String, required: true },
    name: { type: String, required: true },
    etiquetas: [String],
    precioBase: {
        chile: Number,
        internacional: Number
    },
    descripcion: String,
    tallas: Array,
    qualities: Array,
    imagenes: [String]
});

module.exports = mongoose.model('Product', productSchema);

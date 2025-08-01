const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // Datos del cliente
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    rut: { type: String, required: true },
    direccion: { type: String, required: true },
    apartamento: String,
    ciudad: { type: String, required: true },
    codigo_postal: String,
    pais: String,
    
    // Productos del carrito
    productos: [String], // Un array con la descripción de cada producto
    
    // Información del pedido
    subtotal: { type: Number, required: true },
    envio: { type: Number, required: true },
    total: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
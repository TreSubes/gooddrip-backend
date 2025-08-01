// Importamos las herramientas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importamos nuestros "moldes" de la base de datos
const Product = require('./models/Product');
const Order = require('./models/Order');

// Creamos nuestra aplicación
const app = express();
const PORT = 3000;
const dbUrl = process.env.DATABASE_URL;

// --- MIDDLEWARE ---
app.use(cors()); // Permite que tu front-end se comunique con el backend
app.use(express.json()); // Permite al servidor entender los datos JSON que envía el front-end

// Conexión a la base de datos
mongoose.connect(dbUrl)
    .then(() => console.log('¡Conectado a MongoDB Atlas exitosamente!'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// --- RUTAS DE LA API ---
// Ruta para obtener los productos
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// ===== NUEVA RUTA PARA RECIBIR PEDIDOS =====
app.post('/api/orders', async (req, res) => {
    try {
        // Creamos una nueva orden con los datos que nos envía el front-end
        const nuevaOrden = new Order(req.body);

        // Guardamos la orden en la base de datos
        await nuevaOrden.save();

        console.log('Nuevo pedido recibido y guardado:', nuevaOrden);

        // Enviamos una respuesta de éxito al front-end
        res.status(201).json({ message: 'Pedido recibido exitosamente' });

    } catch (error) {
        console.error('Error al guardar el pedido:', error);
        res.status(500).json({ message: 'Error al procesar el pedido' });
    }
});

// Encendemos el servidor
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
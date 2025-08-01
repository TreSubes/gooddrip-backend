const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product'); // Importamos el modelo
const { productsDB } = require('./products.js'); // Importamos tus zapatillas

const dbUrl = process.env.DATABASE_URL;

async function seedDatabase() {
    console.log('Conectando a la base de datos...');
    await mongoose.connect(dbUrl);
    console.log('Conexión exitosa. Empezando la importación...');

    // Borramos los productos existentes para evitar duplicados
    await Product.deleteMany({});
    console.log('Productos antiguos eliminados.');

    // Convertimos tu objeto de productos a un array
    const productsArray = Object.values(productsDB);

    // Insertamos los nuevos productos
    await Product.insertMany(productsArray);
    console.log(`¡Éxito! Se han importado ${productsArray.length} zapatillas a la base de datos.`);

    // Cerramos la conexión
    await mongoose.connection.close();
    console.log('Conexión cerrada.');
}

seedDatabase().catch(err => {
    console.error('Ocurrió un error durante la importación:', err);
    mongoose.connection.close();
});
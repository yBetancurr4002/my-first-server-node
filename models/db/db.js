// Configurar mi conexión a BD
require('dotenv').config();
const mysql = require('mysql2/promise');

// Crear la conexión
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  connectionLimit: process.env.CONNECTION_LIMIT
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Error conectando a MySQL:', err.stack);
//     return;
//   }
//   console.log('Conectado a MySQL con ID:', connection.threadId);
// });

module.exports = connection;

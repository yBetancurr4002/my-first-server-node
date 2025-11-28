// Common JS
require('dotenv').config();
const express = require('express'); // importando express
const personasRoutes = require('./routes/personas.routes.js');

const app = express(); // invocando una funcion - Inicar un servidor express
const port = process.env.PORT_SERVER || 3000; 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mi primer server con node!');
}); // metodo get de mi server

app.use('/api/personas', personasRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// Common JS

const express = require('express'); // importando express
const personasRoutes = require('./routes/personas.routes.js');

const app = express(); // invocando una funcion - Inicar un servidor express
const port = 3000; 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mi primer server con node!');
}); // metodo get de mi server

app.use('/api/personas', personasRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
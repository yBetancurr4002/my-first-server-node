// Common JS

const express = require('express'); // importando express

const app = express(); // invocando una funcion - Inicar un servidor express
const port = 3000; 
app.get('/', (req, res) => {
  res.send('Mi primer server con node!');
}); // metodo get de mi server

// server 

// app.get('es/empleos/${id_empleo}', (req, res) => {
//   res.send('Punto de entrada a empleos');
// });

app.get('/java', (req, res) => {
  res.send('Punto de entrada a Java');
}); 

app.get('/estudiantes', (req, res) => {
  const estudiantes = [
    { id: 1, nombre: 'Juan Perez', edad: 20 },
    { id: 2, nombre: 'Maria Gomez', edad: 22 },]
  res.send(`Lista de estudiantes: ${JSON.stringify(estudiantes)}`);
}); 


// otro metodo get de mi server
/* CRUD 
REST → POST, GET, (PUT, PATCH), DELETE
JAVA → Add, Update, Delete, Find
SQL → INSERT, SELECT, UPDATE, DELETE 

C → POST → crear datos
R → GET → obtener datos
U → PUT / PATCH → actualizar datos
D → DELETE → borrar datos
*/


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
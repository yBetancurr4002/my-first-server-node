const personas = require('../models/persona.js');
const bd = require('../models/db/bd.js');
const express = require('express');
const router = express.Router();

/*
const personas = [
  {
    id: 'P1',
    nombre: 'Ana',
    apellido: 'Torres',
    correo: 'ana.torres@example.com',
    numeroDocumento: '123456789',
    telefono: '3001234567',
    fechaNacimiento: '2002-05-15'
  },
  {
    id: 'P2',
    nombre: 'Luis',
    apellido: 'Mora',
    correo: 'luis.mora@example.com',
    numeroDocumento: '987654321',
    telefono: '3109876543',
    fechaNacimiento: '2000-11-22'
  }
];
*/

// CRUD Personas
// GET
router.get('/', (req, res) => {
    res.json(bd.personas);
});
// POST
router.post('/', (req, res) => {
    const nuevaPersona = req.body; // asignando a nuevaPersona
    bd.personas.push(nuevaPersona);// Agrego la persona a la "BD" al objeto Personas
    res.status(201).json(nuevaPersona); // 201 - Created y devolvemos la persona nueva
});

// PUT
router.put('/:id', (req, res) => {
  const id = req.params.id;

  // Buscar el índice en el array correcto
  const indice = bd.personas.findIndex(p => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: 'Persona no encontrada' });
  }
 
  bd.personas[indice].nombre = req.body.nombre !== undefined ? req.body.nombre : bd.personas[indice].nombre;
  bd.personas[indice].apellido = req.body.apellido !== undefined ? req.body.apellido : bd.personas[indice].apellido;
  bd.personas[indice].correo = req.body.correo !== undefined ? req.body.correo : bd.personas[indice].correo;
  bd.personas[indice].numeroDocumento = req.body.numeroDocumento !== undefined ? req.body.numeroDocumento : bd.personas[indice].numeroDocumento;
  bd.personas[indice].telefono = req.body.telefono !== undefined ? req.body.telefono : bd.personas[indice].telefono;
  bd.personas[indice].fechaNacimiento = req.body.fechaNacimiento !== undefined ? req.body.fechaNacimiento : bd.personas[indice].fechaNacimiento;

  

  res.json(bd.personas[indice]);
});

// DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;

  // Buscar el índice en el array correcto
  const indice = bd.personas.findIndex(p => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: 'Persona no encontrada' });
  }

  const personaEliminada = bd.personas.splice(indice, 1)[0];

  // Responder con la persona eliminada (o solo un mensaje)
  res.json({
    message: 'Persona eliminada correctamente',
    persona: personaEliminada
  });
});

module.exports = router;


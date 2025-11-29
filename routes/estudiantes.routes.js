const express = require('express');
const estudiantesRouter = express.Router();
const estudianteService = require('../services/estudiantes.service.js');

// CRUD - Estudiantes

// CREATE - POST
estudiantesRouter.post('/', async (req, res) => {
  try {
    const nuevoEstudiante = await estudianteService.crearEstudiante(req.body);
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - GET
estudiantesRouter.get('/', async (req, res) => {
  try {
    const estudiantes = await estudianteService.consultarEstudiantes();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

estudiantesRouter.get('/mejorado', async (req, res) => {
  try {
    const estudiante = await estudianteService.consultarEstudiantesMejorado(); 
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE - PUT
estudiantesRouter.put('/:id', async (req, res) => {
  try {
    const estudianteActualizado = await estudianteService.actualizarEstudiante(req.params.id, req.body);  
    res.status(202).json(estudianteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - DELETE
estudiantesRouter.delete('/:id', async (req, res) => {
  try {
    await estudianteService.eliminarEstudiante(req.params.id);      
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  } 
});

module.exports = estudiantesRouter;
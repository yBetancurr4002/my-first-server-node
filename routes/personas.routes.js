const express = require('express');
const personasRouter = express.Router();
const personasService = require('../services/personas.service.js');

personasRouter.post('/', async (req, res) => {
  try {
    const nuevaPersona = await personasService.crearPersona(req.body);
    res.status(201).json(nuevaPersona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

personasRouter.get('/', async (req, res) => {
  try {
    const personas = await personasService.consultarPersonas();
    res.status(200).json(personas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

personasRouter.put('/:id', async (req, res) => {
  try {
    const personas = await personasService.actualizarPersona(req.params.id, req.body);
    res.status(202).json(personas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

personasRouter.delete('/:id', async (req, res) => {
  try {
    await personasService.eliminarPersona(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }});

module.exports = personasRouter;
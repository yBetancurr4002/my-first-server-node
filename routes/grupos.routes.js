const express = require('express');
const gruposRouter = express.Router();
const grupoService = require('../services/grupo.service.js');

// CRUD

// CREATE - POST
gruposRouter.post('/', async (req, res) => {
  try {
    const nuevoGrupo = await grupoService.crearGrupo(req.body);
    res.status(201).json(nuevoGrupo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - GET
gruposRouter.get('/', async (req, res) => {
  try {
    const grupos = await grupoService.consultarGrupos();
    res.status(200).json(grupos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE - PUT
gruposRouter.put('/:id', async (req, res) => {
  try {
    const grupoActualizado = await grupoService.actualizarGrupo(req.params.id, req.body);
    res.status(202).json(grupoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - DELETE
gruposRouter.delete('/:id', async (req, res) => {
  try {
    await grupoService.eliminarGrupo(req.params.id);      
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = gruposRouter;
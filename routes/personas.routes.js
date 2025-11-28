const express = require('express');
const router = express.Router();
const personasService = require('../services/personas.service.js');

router.post('/', async (req, res) => {
  try {
    const nuevaPersona = await personasService.crearPersona(req.body);
    res.status(201).json(nuevaPersona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const personas = await personasService.consultarPersonas();
    res.status(200).json(personas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
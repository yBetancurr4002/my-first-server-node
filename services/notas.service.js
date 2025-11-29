const database = require('../models/db/db.js');

// Entidad
/*
notas (
  id VARCHAR(50) PRIMARY KEY,
  estudiante_id VARCHAR(50) NOT NULL,
  nombre_nota VARCHAR(100) NOT NULL,  -- ej: "Parcial 1", "Proyecto"
  valor DECIMAL(3,1) NOT NULL,        -- ej: 4.5 (rango 0.0 a 5.0)
  porcentaje DECIMAL(5,2) NOT NULL,
)
*/

// CRUD - Notas - Crear, Consultar, Actualizar, Eliminar

// CREATE -> INSERT
async function crearNota(nota) {
  const id = nota.id;
  const estudiante_id = nota.estudianteId;
  const nombre_nota = nota.nombreNota;
  const valor = nota.valor;
  const porcentaje = nota.porcentaje;

  // Validar que exista estudiante
  // const estudiante = await consultarEstudiantePorId(estudiante_id);
  // if (!estudiante) {
  //   throw new Error(`El estudiante con id ${estudiante_id} no existe`);
  // } 

  const query = `INSERT INTO notas (id, estudiante_id, nombre_nota, valor, porcentaje) 
  VALUES (?, ?, ?, ?, ?)`;

  const values = [id, estudiante_id, nombre_nota, valor, porcentaje];
  await (await database).execute(query, values);
  return nota;
}

// READ -> SELECT

// UPDATE -> UPDATE

// DELETE -> DELETE
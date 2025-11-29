const database = require('../models/db/db.js');
const personasService = require('./personas.service.js');
const gruposService = require('./grupo.service.js');

/* Entidad
CREATE TABLE estudiantes (
  id VARCHAR(50) PRIMARY KEY,
  persona_id VARCHAR(50) NOT NULL,
  grupo_id VARCHAR(50) NOT NULL,
  FOREIGN KEY (persona_id) REFERENCES personas(id) ON DELETE CASCADE,
  FOREIGN KEY (grupo_id) REFERENCES grupos(id) ON DELETE CASCADE
);
*/

// CRUD - Estudiantes

// CREATE -> INSERT
/*
{
    "id": "E1",
    "persona_id": "P1",
    "grupo_id": "G1"
}
*/
async function crearEstudiante(estudiante) {
  const id = estudiante.id;
  const persona_id = estudiante.persona_id;
  const grupo_id = estudiante.grupo_id;

  // validar que exista persona_id y grupo_id
  const persona = await personasService.consultarPersonaPorId(persona_id);
  const grupo = await gruposService.consultarGrupoPorId(grupo_id);

  if (!persona) {
    throw new Error(`La persona con id ${persona_id} no existe`);    
  }
  if (!grupo) {
    throw new Error(`El grupo con id ${grupo_id} no existe`);    
  }

  const query = `INSERT INTO estudiantes (id, persona_id, grupo_id) 
  VALUES (?, ?, ?)`;
  const values = [id, persona_id, grupo_id];

  await (await database).execute(query, values);
  return estudiante;
}

// READ -> SELECT

// Consultar todos los estudiantes
async function consultarEstudiantes() {
  const [rows] = await (await database).execute('SELECT * FROM estudiantes');
  
  return rows;
}

// consultar por id
async function consultarEstudiantePorId(id) {
  const [rows] = await (await database).execute('SELECT * FROM estudiantes WHERE id = ?', [id]);
  return rows[0];
}

async function consultarEstudiantesMejorado() {
  const query = `
    select 
      e.id,
      CONCAT(p.nombre, ' ', p.apellido) as nombre_completo,
      g.nombre_grupo
    from estudiantes e
    inner join personas p on e.persona_id = p.id
    inner join grupos g on e.grupo_id  = g.id;
  `;
  const [rows] = await (await database).execute(query);
  
  return rows;
}

// UPDATE -> UPDATE
async function actualizarEstudiante(id, datosActualizados) {
  // validar que el estudiante exista
  const estudianteAEditar = await consultarEstudiantePorId(id);
  if (!estudianteAEditar) {
    throw new Error(`El estudiante con id ${id} no existe`);
  } else {
    // actualizar los datos
    const persona_id = datosActualizados.persona_id;
    const grupo_id = datosActualizados.grupo_id;
    const query = `UPDATE estudiantes SET persona_id = ?, grupo_id = ? WHERE id = ?`;
    const values = [persona_id, grupo_id, id];
    await (await database).execute(query, values);
    return { id, ...datosActualizados };
  }
}

// DELETE -> DELETE
async function eliminarEstudiante(id) {
  const estudianteAEliminar = await consultarEstudiantePorId(id);
  if (!estudianteAEliminar) {
    throw new Error(`El estudiante con id ${id} no existe`);
  } else {
    await (await database).execute(`DELETE FROM estudiantes WHERE id = ?`, [id]);
  }
}

module.exports = {
  crearEstudiante,
  consultarEstudiantes,
  consultarEstudiantesMejorado,
  actualizarEstudiante,
  eliminarEstudiante
}
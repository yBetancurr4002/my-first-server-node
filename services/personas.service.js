const database = require('../models/db/db.js');

// CRUD - Personas
/*
async function crearPersona(persona) {
  const { id, nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento } = persona;
  const query = `
    INSERT INTO personas (id, nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [id, nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento];
  
  await db.query(query, values);
  return persona;
}
*/

// CREATE -> INSERT
async function crearPersona(persona) {
  // const { id, nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento } = persona;
  const id = persona.id;
  const nombre = persona.nombre;
  const apellido = persona.apellido;
  const correo = persona.correo;
  const numero_documento = persona.numeroDocumento;
  const telefono = persona.telefono;
  const fecha_nacimiento = persona.fechaNacimiento;

  const query = `
    INSERT INTO personas (id, nombre, apellido, correo, numeroDocumento, telefono, fechaNacimiento)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [id, nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento];
  await (await database).execute(query, values);
  return persona;

}

// READ -> SELECT
async function consultarPersonas() {
  const [rows] = await (await database).execute('SELECT * FROM personas');
  return rows;
}

async function consultarPersonaPorId(id) {
  const [rows] = await (await database).execute('SELECT * FROM personas WHERE id = ?', [id]);
  return rows[0];
}

// UPDATE -> UPDATE
async function actualizarPersona(id, datosActualizados) {
  // 1- Necesito buscar la persona por id
  const personaAEditar = await consultarPersonaPorId(id);
  // Validar si la persona existe
  if (!personaAEditar) {
    console.error(`La persona con id ${id} no existe`);
  } else {
    // 2- Actualizar los datos de la persona
    const nombre = datosActualizados.nombre;
    const apellido = datosActualizados.apellido;
    const correo = datosActualizados.correo;
    const numero_documento = datosActualizados.numeroDocumento;
    const telefono = datosActualizados.telefono;
    const fecha_nacimiento = datosActualizados.fechaNacimiento;
    
    const query = `
    UPDATE personas 
    SET nombre = ?, apellido = ?, correo = ?, numeroDocumento = ?, telefono = ?, fechaNacimiento = ?
    WHERE id = ?
  `;
  const values = [nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento, id];
  const [result] = await (await database).execute(query, values);
  
  if (result.affectedRows === 0) {
    throw new Error('Persona no encontrada');
  }
  
  return { id, ...datosActualizados };
  }
}

// DELETE -> DELETE
async function eliminarPersona(id) {
  const personaAEditar = await consultarPersonaPorId(id);
  // Validar si la persona existe
  if (!personaAEditar) {
    console.error(`La persona con id ${id} no existe`);
  }
  const query = 'DELETE FROM personas WHERE id = ?';
  const [result] = await (await database).execute(query, [id]);
  return result;
}

module.exports = {
  crearPersona,
  consultarPersonas,
  consultarPersonaPorId,
  actualizarPersona,
  eliminarPersona
};
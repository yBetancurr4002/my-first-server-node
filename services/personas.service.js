const e = require('express');
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
    INSERT INTO personas (id, nombre, apellido, correo, numero_documento, telefono, fecha_nacimiento)
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

// UPDATE -> UPDATE
async function actualizarPersona(id, datosActualizados) {

}


// DELETE -> DELETE
async function eliminarPersona(id) {

}

module.exports = {
  crearPersona,
  consultarPersonas,
  actualizarPersona,
  eliminarPersona
};
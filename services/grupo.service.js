const database = require('../models/db/db.js');


// CRUD - Grupo

// Entidad
/*
CREATE TABLE grupos (
  id VARCHAR(50) PRIMARY KEY,
  nombre_grupo VARCHAR(150) NOT NULL
);
*/

// CREATE -> INSERT
async function crearGrupo(grupo) {
  const id = grupo.id;
  const nombre_grupo = grupo.nombre_grupo;

  // validar por id que no exista el grupo
  const grupoExistente = await consultarGrupoPorId(id);
  if (grupoExistente) {
    throw new Error(`El grupo con id ${id} ya existe`);
  }
  else {    
      const query = `INSERT INTO grupos (id, nombre_grupo) 
      VALUES (?, ?)`;
      const values = [id, nombre_grupo];
      await (await database).execute(query, values);
      return grupo;  
  }

}

// READ -> SELECT

// consultarGrupos TODOS
async function consultarGrupos() {
  const [rows] = await (await database).execute('SELECT * FROM grupos');
  return rows;
}

// consultarGrupoPorId ID
async function consultarGrupoPorId(id) {
  const [rows] = await (await database).execute('SELECT * FROM grupos WHERE id = ?', [id]);
  return rows[0];
}

// UPDATE -> UPDATE
async function actualizarGrupo(id, datosActualizados) {
  // validemos que el grupo exista
  const grupoAEditar = await consultarGrupoPorId(id);
  if (!grupoAEditar) {
    throw new Error(`El grupo con id ${id} no existe`);
  } else {
    // actualizar los datos
    const nombre_grupo = datosActualizados.nombre_grupo;

    const query = `UPDATE grupos SET nombre_grupo = ? where id = ?;`;
    const values = [nombre_grupo, id];
  
    await (await database).execute(query, values);
    return { id, nombreGrupo: nombre_grupo };
  }
}

// DELETE -> DELETE
async function eliminarGrupo(id) {
  // validar que el grupo exista
  const grupoAEliminar = await consultarGrupoPorId(id);
  if (!grupoAEliminar) {
    throw new Error(`El grupo con id ${id} no existe`);
  } else {   
    await (await database).execute(`DELETE FROM grupos WHERE id = ?`, [id]);
  } 
}

module.exports = {
  crearGrupo,
  consultarGrupos,
  consultarGrupoPorId,
  actualizarGrupo,
  eliminarGrupo
}
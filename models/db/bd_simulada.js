// bd.js - Base de datos simulada en memoria

// ===== ENTIDADES =====

// 1. Personas
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

// 2. Notas
const notas = [
  {
    id: 'N1',
    nombre: 'Quiz 1',
    nota: 4.8,
    porcentaje: 10
  },
  {
    id: 'N2',
    nombre: 'Proyecto Final',
    nota: 5.0,
    porcentaje: 40
  },
  {
    id: 'N3',
    nombre: 'Parcial',
    nota: 3.5,
    porcentaje: 30
  }
];

// 3. Estudiantes (relaciona persona + notas)
const estudiantes = [
  {
    id: 'E1',
    personaId: 'P1', // 👈 referencia a persona
    notasIds: ['N1', 'N2'] // 👈 referencias a notas
  },
  {
    id: 'E2',
    personaId: 'P2',
    notasIds: ['N3']
  }
];

// 4. Grupos (relaciona estudiantes)
const grupos = [
  {
    id: 'G1',
    nombreGrupo: 'Programación Web - 2025',
    estudiantesIds: ['E1', 'E2'] // 👈 referencias a estudiantes
  }
];

// ===== FUNCIONES DE APOYO (opcionales pero útiles) =====

// Obtener una persona por ID
const obtenerPersonaPorId = (id) => personas.find(p => p.id === id);

// Obtener una nota por ID
const obtenerNotaPorId = (id) => notas.find(n => n.id === id);

// Obtener un estudiante con sus datos completos (incluyendo persona y notas)
const obtenerEstudianteCompleto = (estudianteId) => {
  const est = estudiantes.find(e => e.id === estudianteId);
  if (!est) return null;

  const persona = obtenerPersonaPorId(est.personaId);
  const notasEstudiante = est.notasIds.map(id => obtenerNotaPorId(id)).filter(Boolean);

  return {
    id: est.id,
    persona,
    notas: notasEstudiante
  };
};

// Obtener un grupo con sus estudiantes completos
const obtenerGrupoCompleto = (grupoId) => {
  const grupo = grupos.find(g => g.id === grupoId);
  if (!grupo) return null;

  const estudiantesCompletos = grupo.estudiantesIds
    .map(id => obtenerEstudianteCompleto(id))
    .filter(Boolean);

  return {
    id: grupo.id,
    nombreGrupo: grupo.nombreGrupo,
    estudiantes: estudiantesCompletos
  };
};

// ===== EXPORTAR =====
module.exports = {
  // Datos crudos (para escritura/lectura directa en desarrollo)
  personas,
  notas,
  estudiantes,
  grupos,

  // Funciones útiles
  obtenerPersonaPorId,
  obtenerNotaPorId,
  obtenerEstudianteCompleto,
  obtenerGrupoCompleto
};
class Estudiante {
  constructor(id, persona, notas = []) {
    this.id = id;
    this.persona = persona;      // instancia de Persona
    this.notas = notas;          // array de instancias de Nota
  }
}

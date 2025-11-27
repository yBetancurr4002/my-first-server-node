class Grupo {
    constructor(id, nombreGrupo, estudiantes = []) {
        this.id = id;
        this.nombreGrupo = nombreGrupo;
        this.estudiantes = estudiantes; // array de instancias de Estudiante
    }
}

/*
private String id;
    private String nombre;
    private ArrayList<Estudiante> estudiante;
*/
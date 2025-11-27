class persona {
    // Atributos
    constructor(
        id,
        nombre, 
        apellido,
        correo,
        numeroDocumento,
        telefono,
        fechaNacimiento
    ) {
        this.setId(id);
        this.setNombre(nombre);
        this.setApellido(apellido);
        this.setCorreo(correo);
        this.setNumeroDocumento(numeroDocumento);
        this.setTelefono(telefono);
        this.setFechaNacimiento(fechaNacimiento);
    }

    ObtenerEdad() {
        // Restar la Hoy() - FechaNacimiento
         fechaNacimiento = getFechaNacimiento();
         fechaActual = "";
        return fechaActual.getYear() - fechaNacimiento.getYear();
    }
      mostrarInfoBasicaIa() {
        return "Nombre: " + nombre + " " + apellido +
                ", Edad: " +
                ", Correo: " + correo;
    }
    // Getters & Setters

    // id
      getId() {
        return id;
    }

      setId( id) {
        if (id != null) {

            this.id = id;
        } else {
            System.out.prln("El id no puede estar vacio");
        }
    }

    // nombre
      getNombre() {
        return nombre;
    }

      setNombre( nombre) {
        if (nombre != null) {
            this.nombre = nombre;
        } else {
            System.out.prln("El nombre no puede estar vacio");
        }

    }

    // apellido
      getApellido() {
        return apellido;
    }

      setApellido( apellido) {
        this.apellido = apellido;
    }

    // correo
      getCorreo() {
        return correo;
    }

      setCorreo( correo) {
        this.correo = correo;
    }

    // Documento
      getNumeroDocumento() {
        return numeroDocumento;
    }

      setNumeroDocumento( numeroDocumento) {
        this.numeroDocumento = numeroDocumento;
    }

    // Telefono
      getTelefono() {
        return telefono;
    }

      setTelefono( telefono) {
        this.telefono = telefono;
    }

    // Fecha Nacimiento
      getFechaNacimiento() {
        return fechaNacimiento;
    }

      setFechaNacimiento( fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
}



    


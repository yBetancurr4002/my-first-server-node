
-- # BD - GestorAcademico_JavaUdeA

-- ## 1. Execute the command for creating a DB

create database GestorAcademico_JavaUdeA;
use GestorAcademico_JavaUdeA

-- ## 2. Tables

/*
CREATE TABLE personas (
  id VARCHAR(50) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  correo VARCHAR(100),
  numeroDocumento VARCHAR(50),
  telefono VARCHAR(20),
  fechaNacimiento DATE
);
*/

-- ### 2.1. - Personas

create table personas(
	id VARCHAR(20) primary key, -- Llave primaria, me permite identificar cada registro como único.
	nombre VARCHAR(100) not null, -- si un campo es "not null", tendrá que ser obligatoriamente llenado cuando se hace un insert de datos
	apellido VARCHAR(100) not null,
	correo VARCHAR(100) not null unique, -- con unique garantizo que no se repitan valores en este campo.
	numeroDocumento VARCHAR (50) not null unique,
	telefono VARCHAR(20),
  	fechaNacimiento DATE
);

INSERT INTO personas (id, nombre, apellido, correo, numeroDocumento, telefono, fechaNacimiento) VALUES
('P1', 'Ana', 'Torres', 'ana.torres@example.com', '123456789', '3001234567', '2002-05-15'),
('P2', 'Luis', 'Mora', 'luis.mora@example.com', '987654321', '3109876543', '2000-11-22'),
('P3', 'Carlos', 'Ruiz', 'carlos.ruiz@example.com', '456789123', '3201122334', '2001-03-10'),
-- INSERT INTO personas (id, nombre, apellido, correo, numeroDocumento, telefono, fechaNacimiento) VALUES
('P5', 'Carlos', 'Ramirez', 'carlos.ramirez@example.com', '11223344', '3156677889', '1999-08-25');

-- select * from personas;

-- ### 2.2. Estudiantes
CREATE TABLE estudiantes (
  id VARCHAR(50) PRIMARY KEY,
  persona_id VARCHAR(50) NOT NULL,
  grupo_id VARCHAR(50) NOT NULL,
  FOREIGN KEY (persona_id) REFERENCES personas(id) ON DELETE CASCADE,
  FOREIGN KEY (grupo_id) REFERENCES grupos(id) ON DELETE CASCADE
);

INSERT INTO estudiantes (id, persona_id, grupo_id) VALUES
('E5', 'P1', 'G3'),  -- Ana en Programación Web
('E6', 'P2', 'G3'),  -- Luis en Programación Web
('E7', 'P3', 'G4'),  -- Carlos en Bases de Datos
('E8', 'P5', 'G4');  -- María en Bases de Datos


select * from estudiantes;

-- ## 2.3 Grupo
CREATE TABLE grupos (
  id VARCHAR(50) PRIMARY KEY,
  nombre_grupo VARCHAR(150) NOT NULL
);


INSERT INTO grupos (id, nombre_grupo) VALUES
('G3', 'Programación Web - 2025'),
('G4', 'Bases de Datos - 2025');

select * from grupos;


-- ### 2.4 Notas
CREATE TABLE notas (
  id VARCHAR(50) PRIMARY KEY,
  estudiante_id VARCHAR(50) NOT NULL,
  nombre_nota VARCHAR(100) NOT NULL,  -- ej: "Parcial 1", "Proyecto"
  valor DECIMAL(3,1) NOT NULL,        -- ej: 4.5 (rango 0.0 a 5.0)
  porcentaje DECIMAL(5,2) NOT NULL,   -- ej: 30.00 (porcentaje del corte)
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE
);

INSERT INTO notas (id, estudiante_id, nombre_nota, valor, porcentaje) VALUES
-- Notas de Ana (E1)
('N1', 'E1', 'Quiz 1', 4.8, 10.00),
('N2', 'E1', 'Proyecto Final', 5.0, 40.00),

-- Notas de Luis (E2)
('N3', 'E2', 'Quiz 1', 3.5, 10.00),
('N4', 'E2', 'Proyecto Final', 4.2, 40.00),

-- Notas de Carlos (E3)
('N5', 'E3', 'Parcial 1', 4.0, 30.00),
('N6', 'E3', 'Taller SQL', 4.7, 20.00),

-- Notas de María (E4)
('N7', 'E4', 'Parcial 1', 4.9, 30.00),
('N8', 'E4', 'Taller SQL', 5.0, 20.00);

select * from notas


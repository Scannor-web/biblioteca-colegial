# Aplicación de Biblioteca Escolar

Este proyecto es una base para un sistema de gestión de lectura de libros escolares. Está organizado para facilitar su desarrollo, mantenimiento y ampliación. A continuación se describen los componentes principales.

---

## Estructura del Proyecto

```
BibliotecaOrganizada/
│
├── login.html
├── registro.html
├── perfil.html
│
├── css/
│   ├── login/
│   │   └── login.css
│   ├── registro/
│   │   └── registro.css
│   └── perfil/
│       └── perfil.css
│
├── js/
│   ├── login/
│   │   └── login.js
│   ├── registro/
│   │   └── registro.js
│   └── perfil/
│       └── perfil.js
│
├── controladores/
│   └── auth/
│       ├── login.php
│       └── registro.php
│
└── modelos/
    └── conexion.php
```

---

## Funcionalidades

### 🔐 Login (`login.html`)
Permite a los usuarios iniciar sesión. Usa `login.js` para enviar los datos y `login.php` para validar.

### 🧾 Registro (`registro.html`)
Formulario para registrar nuevos usuarios. Usa `registro.js` para enviar datos a `registro.php`.

### 👤 Perfil (`perfil.html`)
Vista para editar datos del usuario y cerrar sesión. La funcionalidad está en `perfil.js`.

---

## PHP - Backend

- `login.php`: Valida credenciales de usuario.
- `registro.php`: Registra nuevos usuarios en la base de datos.
- `conexion.php`: Gestiona la conexión a MySQL.

---

## Base de Datos Requerida

```sql
CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  usuario VARCHAR(50) UNIQUE,
  clave VARCHAR(255)
);
```

---

## Notas

- Todos los scripts están comentados para facilitar el aprendizaje.
- Puedes expandir el sistema para incluir gestión de libros, asignaturas y áreas.
- Ideado como base para una biblioteca escolar real.

---

## Autor
Duván Carrascal

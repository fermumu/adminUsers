
# Gestor de Usuarios – API REST con Node.js, Express y MySQL

En esta prueba se desarrolla una API REST sencilla que permite realizar operaciones CRUD sobre una tabla de usuarios. Utiliza Node.js, Express, Sequelize y MySQL.

## Tecnologías utilizadas
Node.js
Express
Sequelize ORM
MySQL
dotenv

## Requisitos previos
Node.js Ya instalado 
MySQL corriendo localmente con las configuraciones de las variables de entorno ya realizadas
Git 

## Instalación de la API de gestion de usuarios

1. ### Clona el repositorio
    git clone https://github.com/fermumu/adminUsers.git

2. ### Instala las dependencias
    npm install

3. ### Configura las variables de entorno
    - Copia el .env.template y renombra  a =>  .env
    - cambiar las variables de entorno de (
        DB_PASSWORD= CONTRASEÑA DE SU BASE DE DATOS
        DB_NAME= NOMBRE DE SU PREFERENCIA Y QUE ESTE CREADA
        )

4. ### Verifica que tu base de datos exista
    Crea una base de datos con el mismo nombre declarado en las variables de entorno en el punto anterior en MySQL 

5. ### Levantar el servidor
    node app.js

## Endpoints/metodos principales que puede usar

| Método | Ruta             | Descripción               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/users`     | Listar todos los usuarios |
| GET    | `/api/users/:id` | Obtener usuario por ID    |
| POST   | `/api/users`     | Crear nuevo usuario       |
| PUT    | `/api/users/:id` | Actualizar usuario        |
| DELETE | `/api/users/:id` | Eliminar usuario          |


# Estructura del proyecto

adminUsers/
│
├── config/             # Configuración de Sequelize y base de datos
│   └── dataBase.js
│
├── controllers/        # Lógica de negocio (CRUD)
│   └── userController.js
│
├── models/             # Definición de modelos (ORM)
│   └── userModel.js
│
├── routes/             # Enrutamiento de endpoints
│   └── userRoutes.js
│
├── .env                # Variables de entorno (no subir al repo)
├── .gitignore          # Ignora node_modules y .env
├── app.js              # Archivo principal de ejecución
└── README.md           # Esta documentación

# Nota
Usa Postman o cualquier cliente HTTP para probar los endpoints.

La tabla se crea automáticamente al ejecutar el servidor si no existe si ya existe la tabla no se creara otra

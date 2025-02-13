# auth-edit-user

Microservicio para la edición de usuarios en el sistema `ReservaBnb`. Implementado con **Node.js**, **Express** y **MySQL** mediante Sequelize.

## 🚀 Requisitos previos

Antes de ejecutar este servicio, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (opcional para ejecución en contenedor)
- Base de datos **MySQL** configurada

## 📦 Instalación

1. Clonar el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd auth-edit-user
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar las variables de entorno en un archivo `.env`:
   ```ini
   DB_NAME=reservaBnb
   DB_USER=admin
   DB_PASS=TuContraseñaSegura
   DB_HOST=13.216.167.191
   PORT=5000
   ```

## 🚀 Uso

1. Iniciar el servidor en modo desarrollo:
   ```sh
   npm start
   ```
2. Editar un usuario (ejemplo con cURL):
   ```sh
   curl -X PUT http://localhost:5000/api/users/{id} \
        -H "Content-Type: application/json" \
        -d '{
              "nombre": "Nuevo Nombre",
              "email": "nuevo@email.com"
            }'
   ```

## 📦 Ejecución con Docker

1. Construir la imagen:
   ```sh
   docker build -t auth-edit-user .
   ```
2. Ejecutar el contenedor:
   ```sh
   docker run -p 5000:5000 --env-file .env auth-edit-user
   ```

## 📌 Endpoints

- `PUT /api/users/:id` → Edita los datos de un usuario por ID.

## 🛠 Tecnologías

- **Node.js**
- **Express**
- **Sequelize**
- **MySQL**

## 📜 Licencia

Este proyecto está bajo la licencia ISC.



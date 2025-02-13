auth-edit-user
Microservicio para la edición de usuarios en el sistema ReservaBnb. Implementado con Node.js, Express y MySQL mediante Sequelize.

🚀 Requisitos previos
Antes de ejecutar este servicio, asegúrate de tener instalado:

Node.js y npm
Docker (opcional para ejecución en contenedor)
Base de datos MySQL configurada
📦 Instalación
Clonar el repositorio:
sh
Copiar
Editar
git clone <URL_DEL_REPOSITORIO>
cd auth-edit-user
Instalar dependencias:
sh
Copiar
Editar
npm install
Configurar las variables de entorno en un archivo .env:
ini
Copiar
Editar
DB_NAME=reservaBnb
DB_USER=admin
DB_PASS=TuContraseñaSegura
DB_HOST=13.216.167.191
PORT=5000
🚀 Uso
Iniciar el servidor en modo desarrollo:
sh
Copiar
Editar
npm start
Editar un usuario (ejemplo con cURL):
sh
Copiar
Editar
curl -X PUT http://localhost:5000/api/users/{id} \
     -H "Content-Type: application/json" \
     -d '{
           "nombre": "Nuevo Nombre",
           "email": "nuevo@email.com"
         }'
📦 Ejecución con Docker
Construir la imagen:
sh
Copiar
Editar
docker build -t auth-edit-user .
Ejecutar el contenedor:
sh
Copiar
Editar
docker run -p 5000:5000 --env-file .env auth-edit-user
📌 Endpoints
PUT /api/users/:id → Edita los datos de un usuario por ID.
🛠 Tecnologías
Node.js
Express
Sequelize
MySQL
📜 Licencia
Este proyecto está bajo la licencia ISC.


require('dotenv').config();
const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5001;
app.get('/', (req, res) => {
    res.send('🚀 API funcionando correctamente. Usa /api/users para acceder a los usuarios.');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: \x1b[36mhttp://localhost:${PORT}\x1b[0m`);
});

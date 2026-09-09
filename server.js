require('dotenv').config();

const express = require('express');
const cors = require('cors');

const tarefasRoutes = require('./src/routes/tarefas.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');
const projetosRoutes = require('./src/routes/projetos.routes');

const logger = require('./src/middlewares/logger');
const validarContentType = require('./src/middlewares/validarContentType');
const temporizador = require('./src/middlewares/temporizador');
const corsMiddleware = require('./src/middlewares/corsMiddlewares')

const app = express();
const PORTA = 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'https://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeader: ['Content-Type', 'Authorization'],
    
 }));
app.use(express.json());
app.use(validarContentType);
app.use(logger);
app.use(temporizador);
app.use(corsMiddleware);

app.get('/', (req, res) => {
    res.json({ mensagem: 'TaskFlow API funcionando!' });
});

app.use('/usuarios', usuariosRoutes);
app.use('/tarefas', tarefasRoutes);
app.use('/projetos',projetosRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: 'Rota não encontrada' });
    });

app.listen(PORTA, () => {
    console.log('Servidor rodando em https://localhost:${PORTA}');
});

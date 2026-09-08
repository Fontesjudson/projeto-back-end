const express = require('express');
const validarContentType = require('./utils/src/middlewares/validarContentType');
const logger = require('./utils/src/middlewares/logger');
const tarefasRoutes = require('./utils/src/routes/tarefas.routes');
const usuariosRoutes = require('./utils/src/routes/usuarios.routes');
const projetosRoutes = require('./utils/src/routes/projetos.routes');

const app = express();
app.use(validarContentType);
app.use(logger);
const PORTA = 3000;
app.use(express.json());

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

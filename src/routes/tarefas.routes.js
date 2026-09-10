const express = require('express');
const router = express.Router();

const validar = require('../middlewares/validar');
const schemas = require('../middlewares/schemas');
const tarefasController = require('../controllers/tarefas.controller');

router.get('/estatisticas', tarefasController.estatisticas);
router.get('/resumo', tarefasController.resumo)

router.get('/', tarefasController.listar);
router.post('/', validar(schemas.usuario), usuariosController.criar);
router.put('/:id', validar(schemas.usuario), usuariosController.atualizar);
router.delete('/:id', tarefasController.remover);
router.get('/:id', tarefasController.buscarPorId);

module.exports = router;
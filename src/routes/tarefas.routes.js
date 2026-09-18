const express = require('express');
const router = express.Router();

const validar = require('../middlewares/validar');
const schemas = require('../middlewares/schemas');
const tarefasController = require('../controllers/tarefas.controllers')
//const autenticar = require('../middlewares/autenticar')

router.get('/estatisticas', tarefasController.estatisticas);
router.get('/resumo', tarefasController.resumo)

router.get('/', tarefasController.listar);
// router.post('/', autenticar, validar(schemas.usuario), usuariosController.criar);
// router.put(autenticar, '/:id', validar(schemas.usuario),usuariosController.atualizar);
// router.delete('/:id', autenticar, tarefasController.remover);

router.post('/',  validar(schemas.usuario), tarefasController.criar);
router.put('/:id', validar(schemas.usuario),tarefasController.atualizar);
router.delete('/:id', tarefasController.remover);

router.get('/:id', tarefasController.buscarPorId);

module.exports = router;
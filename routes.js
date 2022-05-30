const express = require('express');

const ProdutoController = require('./src/controllers/produtoController');

const routes = express.Router();

routes.post('/produto', ProdutoController.create);
routes.get('/listar', ProdutoController.listar);

module.exports = routes;
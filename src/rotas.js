const express = require('express');

const contasController = require('./controladores/contasController');

const trasacoesController = require('./controladores/transacoesController');

const intermediadores = require('./intermediadores');

const rota = express();

rota.use(express.json());

rota.get('/contas', intermediadores.senhaAdmin, contasController.listaconsta);
rota.post('/contas', contasController.criarConta);
rota.put('/contas/:numeroConta/usuario', contasController.atualizarUsuario);
rota.delete('/contas/:numeroConta', contasController.excluirConta);
rota.post('/transacoes/depositar', trasacoesController.depositar);
rota.post('/transacoes/sacar', trasacoesController.sacar);
rota.post('/transacoes/transferir', trasacoesController.transferir);
rota.get('/contas/saldo', intermediadores.validacaoUsuario, contasController.saldo);
rota.get('/contas/extrato', intermediadores.validacaoUsuario, contasController.extrato)
module.exports = rota;    
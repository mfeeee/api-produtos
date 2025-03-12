// Define a porta em que o servidor irá rodar
const porta = 3003;

// Importa as dependências necessárias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

// Middleware para processar dados enviados no corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para obter todos os produtos cadastrados
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()); // Retorna a lista de produtos em formato JSON
});

// Rota para obter um produto específico pelo ID
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)); // Retorna um único produto em formato JSON
});

// Rota para adicionar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); // Retorna o produto cadastrado em formato JSON
});

// Rota para atualizar um produto existente pelo ID
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); // Retorna o produto atualizado em formato JSON
});

// Rota para excluir um produto pelo ID
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); // Retorna o produto excluído em formato JSON
});

// Inicia o servidor na porta especificada e exibe uma mensagem no console
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
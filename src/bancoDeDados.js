// Simula um banco de dados em memória

// Objeto para gerar IDs automáticos para os produtos
const sequence = {
    _id: 1,
    get id() { return this._id++; } // Retorna o ID atual e incrementa para o próximo
};

// Objeto que armazenará os produtos
const produtos = {};

// Função para salvar um produto no "banco de dados"
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id; // Se o produto não tiver um ID, gera um novo
    produtos[produto.id] = produto; // Adiciona ou atualiza o produto no objeto
    return produto; // Retorna o produto salvo
}

// Função para obter um produto pelo ID
function getProduto(id) {
    return produtos[id] || {}; // Retorna o produto ou um objeto vazio caso não exista
}

// Função para obter todos os produtos cadastrados
function getProdutos() {
    return Object.values(produtos); // Retorna um array com todos os produtos
}

// Função para excluir um produto pelo ID
function excluirProduto(id) {
    const produto = produtos[id]; // Obtém o produto antes de excluir
    delete produtos[id]; // Remove o produto do objeto
    return produto; // Retorna o produto removido
}

// Exporta as funções para serem utilizadas em outros arquivos
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto };

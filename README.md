# API de Produtos

Esta é uma API simples para gerenciar produtos, construída com Node.js e Express.

## Tecnologias Utilizadas
- Node.js
- Express
- Body-parser

## Como Usar
### 1. Instalação das Dependências
Antes de executar a API, instale as dependências:
```sh
npm i --save express@4.16.2 -E
```

```sh
npm i --save body-parser@1.18.2 -E
```


### 2. Executando o Servidor
Para iniciar o servidor, execute:
```sh
node index.js
```
O servidor rodará na porta `3003`.

## Funcionalidades Disponíveis
### 1. Obter todos os produtos
**GET** `/produtos`
Retorna a lista de todos os produtos.

### 2. Obter um produto específico
**GET** `/produtos/:id`
Retorna um produto baseado no ID informado.

### 3. Criar um novo produto
**POST** `/produtos`
Envie os dados do novo produto no corpo da requisição usando **x-www-form-urlencoded**:

**Exemplo:**
```sh
curl -X POST http://localhost:3003/produtos \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "nome=Teclado Gamer&preco=150"
```

### 4. Atualizar um produto
**PUT** `/produtos/:id`
Atualiza um produto pelo ID informado na URL e envia os novos valores no corpo da requisição.

**Exemplo:**
```sh
curl -X PUT http://localhost:3003/produtos/1 \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "nome=Mouse Gamer&preco=200"
```

### 5. Deletar um produto
**DELETE** `/produtos/:id`
Remove um produto baseado no ID informado.

**Exemplo:**
```sh
curl -X DELETE http://localhost:3003/produtos/1
```

## Testes
A API foi testada e executada no **Postman**, garantindo seu funcionamento adequado.

## Estrutura do Projeto
O código-fonte está organizado da seguinte forma:
```
/
├── src/
│   ├── bancoDeDados.js  # Simula um banco de dados em memória
│   ├── index.js         # Arquivo principal da API
├── package.json         # Dependências do projeto
├── package-lock.json    # Controle de versão das dependências
```

## Autor
Projeto desenvolvido por Maria Fernanda Costa como exemplo de API REST com Node.js e Express.
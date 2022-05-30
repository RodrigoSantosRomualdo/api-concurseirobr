const connection = require('../database/connection/db');
const Produto = require('../database/collection/produto')

module.exports = {
    async create(request, response) {
        console.log('CHAMOU AQUI')

        const novoProduto = await Produto.create({
            nome: "PRODUTO NOVO",
            preco: 23,
            descricao: "Teclado New"
        });  
    
        console.log(novoProduto)

        response.send(novoProduto)
    },

    async listar(request, response) {
        console.log('CHAMOU AQUI LISTAR')

        const novoProduto = await Produto.findAll({});  
    

        response.send(novoProduto)
    }


}
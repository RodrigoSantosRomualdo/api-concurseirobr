require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const port = 3002;
app.listen(process.env.PORT || port);

/*
(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    
    const produtos = await Produto.findAll();
    console.log(produtos)
})(); */

/*
    
    const novoProduto = await Produto.create({
        nome: "Teclado",
        preco: 30,
        descricao: "Teclado New"
    });  

    console.log(novoProduto)  */




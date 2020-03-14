const express = require('express');
const sequelize = require('sequelize');
const db = require('./database/db');
const cors = require('cors')
let produto = require('./model/produto');

const app = express();

app.use(cors());

produto.init(db)

app.get('/', (req, res) =>{
    // res.send('Hello World');
    produto.findAll().then(produtos =>{
        
        res.send(produtos);
    })
});

app.get('/search', (req, res) => {
    let ean = req.query.ean;

    produto.findOne({
        attributes: ['nome', 'img'],
        where: {
            ean: ean
        }
    })
    .then(produto =>{
        if(!produto){
            res.json(null);
        }
        res.json(produto)
    })
    .catch(err =>{
        console.log(err);
    })
})

app.listen(5000, ()=>{
    console.log("aplicação inicializda na porta 3000");
});
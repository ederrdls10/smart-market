const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:senha@localhost:5432/smart_market');

db.authenticate()
.then(()=> {
    console.log('connected')
})
.catch( err =>{
    console.log(err);
})

module.exports = db;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('u617308241_concurseirobr', 'u617308241_concurseirobr', '@Teste12345', {
    dialect: 'mysql',
    host: 'sql449.main-hosting.eu',
    
})

module.exports = sequelize;
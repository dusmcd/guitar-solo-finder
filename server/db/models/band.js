const db = require('../db')
const Sequelize = require('sequelize')

const Band = db.define('band', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Band

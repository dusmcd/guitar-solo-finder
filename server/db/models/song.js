const db = require('../db')
const Sequelize = require('sequelize')

const Song = db.define('song', {
  style: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  speed: {
    type: Sequelize.ENUM,
    values: ['slow', 'medium', 'fast']
  },
  difficulty: {
    type: Sequelize.ENUM,
    values: ['easy', 'intermediate', 'hard', 'very hard']
  }
})

module.exports = Song

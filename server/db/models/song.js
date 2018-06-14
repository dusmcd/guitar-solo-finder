const db = require('../db')
const Sequelize = require('sequelize')

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
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
  },
  videoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Song

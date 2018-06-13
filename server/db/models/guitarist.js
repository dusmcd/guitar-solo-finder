const db = require('../index')
const Sequelize = require('sequelize')

const Guitarist = db.define('guitarist', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  guitar: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return (
        this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
      )
    }
  }
})

module.exports = Guitarist

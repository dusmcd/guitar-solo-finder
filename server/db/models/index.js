const User = require('./user')
const Guitarist = require('./guitarist')
const Song = require('./song')
const Band = require('./band')

Guitarist.belongsTo(Band)
Band.hasMany(Guitarist)

Song.belongsTo(Guitarist)
Guitarist.hasMany(Song)

module.exports = {
  User,
  Guitarist,
  Song,
  Band
}

'use strict'
const db = require('../server/db')
const {Guitarist, Band, Song} = require('../server/db/models')
const {guitarists, songs, bands} = require('./seed.data')

db
  .sync({force: true})
  .then(() => {
    return Band.bulkCreate(bands)
  })
  .then(() => {
    return Guitarist.bulkCreate(guitarists)
  })
  .then(() => {
    return Song.bulkCreate(songs)
  })
  .then(() => {
    console.log('DB seeded')
    db.close()
  })
  .catch(err => {
    console.error('DB not seeded properly:', err.message)
  })

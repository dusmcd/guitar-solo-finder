const router = require('express').Router()
const {Song} = require('../db/models')

router.get('/', (req, res, next) => {
  Song.findAll()
    .then(songs => res.json(songs))
    .catch(err => next(err))
})

module.exports = router

const router = require('express').Router()
const {Guitarist} = require('../db/models')

router.get('/', (req, res, next) => {
  Guitarist.findAll()
    .then(guitarists => res.json(guitarists))
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  Guitarist.create(req.body)
    .then(guitarist => {
      res.json(guitarist)
    })
    .catch(err => next(err))
})

module.exports = router

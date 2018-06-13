const router = require('express').Router()
const {Guitarist} = require('../db/models')

router.post('/', async (req, res, next) => {
  const guitarist = await Guitarist.create(req.body)
  res.json(guitarist)
})

module.exports = router

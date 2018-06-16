const router = require('express').Router()
const {Song, Guitarist, Band} = require('../db/models')

router.post('/', (req, res, next) => {
  const queryObj = pullOutDefinedKeys(req.body)
  Song.findAll({
    where: queryObj,
    include: [{model: Guitarist, include: [Band]}]
  })
    .then(songs => res.json(songs))
    .catch(err => next(err))
})

function pullOutDefinedKeys(obj) {
  const result = {}
  Object.keys(obj).forEach(key => {
    if (obj[key]) result[key] = obj[key]
  })
  return result
}

module.exports = router

const {Router} = require('express')
const Team = require('./model')
const City = require('../city/model')

const router = new Router()
router.get('/team', (req, res, next) => {
  Team.findAll()
  .then((team)=> {
    return res.send(team)
   })
  .catch(error => next(error))
})

router.post('/team', (req, res, next) => {
  Team.create(req.body)
  .then((team) =>{
    return res.json(team)
  })
  .catch(error => next(error))
})

router.get('/team/:id', (req, res, next)=>{
  Team.findByPk(req.params.id, {include: [City]})
  .then((team) => {
    return res.json(team)
  })
  .catch(error => next(error))
})

router.post('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id, {include: [City]})
  .then(team => team.update(req.body))
  .then(team => res.json(team))
  .catch(error => next(error))
})

router.delete('/team/:id', (req, res, next) => {
  Team.destroy({where: {id : req.params.id}})
  .then(number => res.json(number))
  .catch(error => next(error))
})
module.exports = router
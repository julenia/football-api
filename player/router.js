const {Router} = require('express')
const Player = require('./model')
const Team = require('../team/model')
const City = require('../team/model')

const router = new Router()
router.get('/player', (req, res, next) => {
  Player.findAll()
  .then((player)=> {
    return res.send(player)
   })
  .catch(error => next(error))
})

router.post('/player', (req, res, next) => {
  Player.create(req.body)
  .then((player) =>{
    return res.json(player)
  })
  .catch(error => next(error))
})

router.get('/player/:id', (req, res, next)=>{
  Player.findByPk(req.params.id, { include: [Team, City] })
  .then((player) => {
    return res.json(player)
  })
  .catch(error => next(error))
})

router.post('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team, City] })
  .then(player => player.update(req.body))
  .then(player => res.json(player))
  .catch(error => next(error))
})

router.delete('/player/:id', (req, res, next) => {
  Player.destroy({where: {id : req.params.id}})
  .then(number => res.json(number))
  .catch(error => next(error))
})

router.get('/player/team/:teamId', (req, res, next) => {
  Player.findAll({
    where: {
      teamId : req.params.teamId
    }
  })
  .then(players => res.json(players))
  .catch(error => next(error))
})

module.exports = router
const {Router} = require('express')
const City = require('./model')

const router = new Router()
router.get('/city', (req, res, next) => {
  City.findAll()
  .then((city)=> {
    return res.send(city)
   })
  .catch(error => next(error))
})

router.post('/city', (req, res, next) => {
  City.create(req.body)
  .then((city) =>{
    return res.json(city)
  })
  .catch(error => next(error))
})

router.get('/city/:id', (req, res, next)=>{
  City.findByPk(req.params.id)
  .then((city) => {
    return res.json(city)
  })
  .catch(error => next(error))
})

router.post('/city/:id', (req, res, next) => {
  City.findByPk(req.params.id)
  .then(city => city.update(req.body))
  .then(city => res.json(city))
  .catch(error => next(error))
})

router.delete('/city/:id', (req, res, next) => {
  City.destroy({where: {id : req.params.id}})
  .then(number => res.json(number))
  .catch(error => next(error))
})
module.exports = router
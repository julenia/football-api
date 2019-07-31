const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const cityRouter = require('./city/router')

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.use(cityRouter)
app.listen(port, ()=> console.log(`Listening on port:${port}`))
const express = require('express')
const initDB = require('./src/config/db')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

const userRouters = require('./src/routes/user')
const itemsRouters = require('./src/routes/item')
const authRouters = require('./src/routes/auth')

// for parsing json

app.use(
  bodyParser.json({
    limit: '20mb'
  })
)

// for parsing application/x
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)

app.use(userRouters)
app.use(itemsRouters)
app.use(authRouters)

app.listen(port, () => {
  console.log('server starting')
})

initDB()

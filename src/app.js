require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const newsRouter = require('./routes/news')

const app = express()

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganSetting))

app.use(cors())
app.use(helmet())

const {CLIENT_ORIGIN} = require('./config');

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

console.log('news router', newsRouter);

app.use(newsRouter)



app.use(function errorHandler(error, req, res, next) {
     let response
     if (NODE_ENV === 'production') {
       response = { error: { message: 'server error' } }
     } else {
       console.error(error)
       response = { message: error.message, error }
     }
     res.status(500).json(response)
   })
  

module.exports = app
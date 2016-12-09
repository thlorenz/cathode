require('babel-register')({ extensions: [ '.jsx' ] })

const path = require('path')
const express = require('express')
const app = express()

const staticPath = path.join(__dirname, '..', 'static')

app.use('/static', express.static(staticPath))
app.get('*', require('./render.jsx'))

app.listen(3000, function onlistening() {
  console.log('Example app listening on port 3000!')
})

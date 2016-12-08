const path = require('path')
const express = require('express')
const app = express()

const staticPath = path.join(__dirname, '..', 'static')

app.use('/static', express.static(staticPath))

app.get('/', function serverRoot(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function onlistening() {
  console.log('Example app listening on port 3000!')
})

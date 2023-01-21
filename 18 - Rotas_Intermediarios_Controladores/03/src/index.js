const express = require('express')
const app = express()

let router = require('./roteador')
app.use('/', router)


app.listen(8000)
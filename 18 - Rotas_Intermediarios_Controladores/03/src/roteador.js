const express = require('express')
const router = express.Router()

const { get, getPorId } = require('./controladores/imoveis')

router.get('/imoveis', get)

router.get('/imoveis/:id', getPorId)

module.exports = router
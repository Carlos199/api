const express = require('express')

const controller = require('../controllers/auth')

const router = express.Router()

const path = 'auth'

router.post(`/${path}`, controller.authUser)

module.exports = router

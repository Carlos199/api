const express = require('express')

const controller = require('../controllers/item')

const router = express.Router()

const path = 'items'

// GET USERS

router.get(`/${path}`, controller.getData)

module.exports = router

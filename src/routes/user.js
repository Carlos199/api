const express = require('express')

const controller = require('../controllers/user')

const router = express.Router()

const path = 'users'

// GET USERS

router.get(`/${path}`, controller.getData)

router.post(`/${path}`, controller.insertData)

router.put(`/:id`, controller.updateData)

router.delete(`/:id`, controller.deleteData)

module.exports = router

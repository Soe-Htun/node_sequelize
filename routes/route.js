const express = require('express')
const users = require('../controllers/users')
const router = express.Router()

router.post('/api/user', users.create)
router.get('/api/users', users.findAll)
router.get('/api/user/:id', users.findOne)
router.put('/api/user/:id', users.update)
router.delete('/api/user/:id', users.delete)

module.exports = router
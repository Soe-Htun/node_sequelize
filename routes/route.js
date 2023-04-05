const express = require('express')
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const products = require('../controllers/products')
const router = express.Router()

// check user token
const userAuth = require('../controllers/authorize')

//Auth
router.post('/api/auth/register', auth.register)
router.post('/api/auth/login', auth.login)

// router.post('/api/user', users.create)
router.get('/api/users',userAuth.isAuthorized, users.findAll)
router.get('/api/user/:id',userAuth.isAuthorized, users.findOne)
router.put('/api/user/:id',userAuth.isAuthorized, users.update)
router.delete('/api/user/:id',userAuth.isAuthorized, users.delete)

// Products
router.post('/api/product', userAuth.isAuthorized, products.create)
router.get('/api/products', userAuth.isAuthorized, products.findAll)
router.get('/api/product/:id', userAuth.isAuthorized, products.findOne)
router.put('/api/product/:id',userAuth.isAuthorized, products.update)
router.delete('/api/product/:id',userAuth.isAuthorized, products.delete)
module.exports = router
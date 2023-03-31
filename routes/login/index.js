const express = require('express')
const { users } = require('../../controllers')

const router = express.Router()
// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Get users successfully'
//     })
// })

router.post('/api/auth/login', users.create)
const jwt = require('jsonwebtoken')
const db = require('../models');
const Users = db.Users

module.exports.login = (req, res) => {
    const token = jwt.sign({email: req.body.email}, process.env.TOKEN_SECRET)
    Users.findOne({ where: {
            email: req.body.email
        } 
    }).then(data => {
        if(data) {
            if(data.password == req.body.password) {
                console.log('Data', data);
                const userList = {
                    "userInfo": data,
                    "token": token
                }
                res.status(200).json({
                    data: userList,
                    message: 'Login Success'
                })
            } else {
                console.log('Data', data);
                res.status(403).send({
                    message: " Incorrect Password "
                })
            }
        } else {
            res.status(403).send({
                message: "Can't find thi user"
            })
        }
    })
}

module.exports.register = (req, res) => {
    Users.findOne({ where: {
            email: req.body.email
        } 
    }).then(data => {
        if(data) {
            console.log('Data', data);
            res.status(400).send({
                message: " User already exist "
            })
        }

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            // birthday: req.body.birthday
        }
        Users.create(user).then(data => {
            res.send(user)
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating user'
            })
        })

        console.log('Bla');
    })
}
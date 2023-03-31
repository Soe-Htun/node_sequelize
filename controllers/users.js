const db = require('../models')
const Users = db.Users;
// const Op = db.sequelize.Op;

// module.exports = {
//     create: async (req, res) => {
//         if(req.body.username  && req.body.email && req.body.password) {
//             const { username, email, password } = req.body

//             await Users.create({
//                 username,
//                 email,
//                 password,
//                 'created_at': new Date(),
//                 'updated_at:' : new Date()
//             })
//         } else {
//             res.send('Not added to the database!')
//         }
//     },

//     findAll: async(req, res) => {
//         const username = req.body.username
//     }
// }



// create new User 
exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: 'Name is required'
        });
        return
    }

    const user = {
        name: req.body.name,
        gender: req.body.gender,
        birthday: req.body.birthday
    }
    Users.create(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating user'
        })
    })
}

// Retrieve all users from database
exports.findAll = (req, res) => {

}

// Find single user with ID
exports.findOne = (req, res) => {

}

// Update user with ID
exports.update = (req, res) => {

}

// Delete User with ID
exports.delete = (req, res) => {

}

// Delete all users from daabase
exports.deleteAll = (req, res) => {

}

// Find all published users
exports.findAllPublished = (req,res) => {

}
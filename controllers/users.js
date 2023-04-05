const db = require('../models')
const Users = db.Users;

// create new User 
// exports.create = (req, res) => {

//     Users.findOne({ where: {
//         email: req.body.email
//         }
//     }).then(data => {
//         if(data) {
//             res.status(400).send({
//                 message: 'Failed!! User already exist'
//             })
//             return;
//         }

//         const user = {
//             name: req.body.name,
//             gender: req.body.gender,
//             email: req.body.email,
//             birthday: req.body.birthday
//         }
//         Users.create(user).then(data => {
//             res.send(user)
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || 'Some error occurred while creating user'
//             })
//         })

//     })
    
// }

// Retrieve all users from database
exports.findAll = async (req, res) => {
    Users.findAll().then(data => {
       return res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

// Find single user with ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    Users.findByPk(id).then( data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: 'Error while retrieving user '
        })
    })
}

// Update user with ID
exports.update = (req, res) => {
    const id = req.params.id;
    Users.update(req.body, {
        where: { id: id }
    }).then( num => {
        if (num == 1) {
            res.send({
              message: "User was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update user with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
    }).catch(err => {
        res.status(500).send({
            message: 'Error updating user '
        })
    })
}

// Delete User with ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Users.destroy({ where: { id: id}}).then(num => {
        if (num == 1) {
            res.send({
              message: "User was deleted successfully."
            });
          } else {
            res.send({
              message: `Cannot delete user with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
    }).catch(err => {
        res.status(500).send({
            message: 'Could not delete user'
        })
    })
}
const db = require('../models')
const Products = db.Products;

exports.create = (req, res) => {
    const productList = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    }
    Products.create(productList).then(data => {
        res.status(200).send({
            message: 'Create successfully'
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating products'
        })
    })
}


// Retrieve all users from database
exports.findAll = async (req, res) => {
    Products.findAll().then(data => {
       return res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

// Find single user with ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    Products.findByPk(id).then( data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: 'Error while retrieving product '
        })
    })
}

// Update user with ID
exports.update = (req, res) => {
    const id = req.params.id;
    Products.update(req.body, {
        where: { id: id }
    }).then( num => {
        if (num == 1) {
            res.send({
              message: "Product was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
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

    Products.destroy({ where: { id: id}}).then(num => {
        if (num == 1) {
            res.send({
              message: "Product was deleted successfully."
            });
          } else {
            res.send({
              message: `Cannot delete Product with id=${id}. Maybe Product was not found or req.body is empty!`
            });
          }
    }).catch(err => {
        res.status(500).send({
            message: 'Could not delete user'
        })
    })
}
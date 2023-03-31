const express = require('express');
require("dotenv").config();
const app = express() 
const db = require('./models')
const bodyParser = require('body-parser')

app.use(express.json(), bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// Drop table
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Sync db');
// })
app.get('/', [(req,res, next) => {
    res.send('This is home page')
}])
app.use('/', require('./routes/route'))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
const express = require('express');
const app = express() 
const db = require('./models')

const users = require('./routes/route') 

// app.set()
app.use(express.json())

// app.use('/', require('./routes/route'))
// (async () => {
//     await db.sequelize.sync()
// })()
db.sequelize.sync({force: true}).then(() => {
    console.log('Sync db');
})
app.get('/', [(req,res, next) => {
    res.send('This is hme page')
}])
app.use((req, res, next) => {
    console.log('This is global middleware');
    next()
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port 8000`);
})
//install path dependency
const path = require('path')

//export so we can use in server.js
module.exports = (app) => {
    //initial homescreen
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
    //actual notes page
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
    //all other requests go back to homepage
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
}

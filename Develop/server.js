//import the http and fs node modules
const http = require("http");
const fs = require('fs')
const express = require('express');
const app = express();
//define a port for testing
const PORT = 8080;

//generic function for handling requests and responses
app.get('/', (req,res) => {
    res.send(
        fs.readFile('./Develop/public/index.html', (err, data) => {
            if (err) throw err;
        })
    )
})


//start server
app.listen(PORT, () => {
    console.log(`now listening on http://localhost:${PORT}`)
});
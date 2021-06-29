//import the http and fs node modules
const express = require('express');
const app = express();
//define a port for testing
const PORT = 8080;

//Sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Tells server how to respond when user visits certain pages
require('./routes/htmlRoutes')(app);
//tells app to use apiRoutes to connect to db
const apiRoutes = require('./routes/apiRoutes')
app.get('/api', apiRoutes);
//start server
app.listen(PORT, () => {
    console.log(`now listening on http://localhost:${PORT}`)
});
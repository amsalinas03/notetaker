//import the http and fs node modules
const express = require('express');
const app = express();
//define a port for testing
const PORT = process.env.PORT || 5000;

//Sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
//middleware tells app to use apiRoutes
const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes);
//Tells server how to respond when user visits certain pages
require('./routes/htmlRoutes')(app);
//start server
app.listen(PORT, () => {
    console.log(`now listening on http://localhost:${PORT}`)
});
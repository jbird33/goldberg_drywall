// Standardized code to make my installed express, ejs, etc work below
const express = require('express');
const app = express();

// const routes = require('./routes');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
// The above has to be there befor the below----------------------

app.get('/', (req, res) => {
    res.render('index.ejs');
})








// This is where I tell the app to listen
app.listen(3000, (req, res) => {
    console.log("App is up and listening on!")
})
// Standardized code to make my installed express, ejs, etc work below
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
// The above has to be there before the below but, both are required-----------------

// const customer = require('./models/customer.js');

const routes = require('./routes');

app.use('/customers', routes.customers);

// Below tells the site to show the welcome page

app.get('/', (req, res) => {
    res.render('index.ejs');
})









// This is where I tell the app to listen
app.listen(3000, (req, res) => {
    console.log("App is up and listening on!")
})
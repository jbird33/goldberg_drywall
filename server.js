// Standardized code to make my installed express, ejs, etc work below
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');
// The above has to be there before the below but, both are required-----------------

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/customers', routes.customers);
app.use('/jobs', routes.jobs);

// Below tells the site to show the welcome page

app.get('/', (req, res) => {
    res.render('index.ejs');
})









// This is where I tell the app to listen
app.listen(3000, (req, res) => {
    console.log("App is up and listening on!")
})
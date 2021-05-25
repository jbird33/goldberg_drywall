// Standard needed line of code ----------------------

const Customers = require('../models').Customer;

// ---------------------------------------------------

const index = (req, res) => {
    res.render('/customers/show.ejs', {customers: customer});
}


// Export here ---------------------------------------

module.exports = {
    index
}
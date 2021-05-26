// Standard needed line of code ----------------------
const Jobs = require('../models').Jobs;
const Customer = require('../models').Customer;

// ---------------------------------------------------

const index = (req, res) => {
    Customer.findAll().then(customers => {
        res.render('customers/show.ejs', { customers: customers});
    })
    // res.render('customers/show.ejs');
}

const showProfile = (req, res) => {
    Customer.findByPk(req.params.index, {
        include: [{
            model: Jobs
        }]
    })
    .then(foundCustomer => {
        console.log(foundCustomer);
        res.render('customers/profile.ejs', {customer: foundCustomer})
    })
}

const editprofile = (req, res) => {
    Customer.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedCustomer => {
        res.redirect(`/customers/profile/${req.params.index}`);
    })
}

const deleteCustomer = (req,res) => {
    Customer.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/customers/show');
    })
}

const newCustomer = (req, res) => {
    res.render('customers/new.ejs')
}

const createCustomer = (req, res) => {
    Customer.create(req.body)
    .then(newCustomer => {
        res.redirect(`/customers/profile/${newCustomer.id}`);
    })
}


// Export here ---------------------------------------

module.exports = {
    index,
    showProfile,
    editprofile,
    deleteCustomer,
    newCustomer,
    createCustomer
}
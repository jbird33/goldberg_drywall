// Need 3 of the (4) per standard code ----------------
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------------------------------

router.get('/show', ctrl.customers.index);

router.get('/profile/:index', ctrl.customers.showProfile);

router.put('/profile/:index', ctrl.customers.editprofile);

router.delete('profile/:index', ctrl.customers.deleteCustomer);

router.get('/new', ctrl.customers.newCustomer);

router.post('/new', ctrl.customers.createCustomer);


// Need this last of (4) -------------------------------
module.exports = router;
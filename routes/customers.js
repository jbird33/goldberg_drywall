// Need 3 of the (4) per standard code ----------------
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------------------------------

router.get('/customers/show', ctrl.customer.index);


// Need this last of (4) -------------------------------
module.exports = router;
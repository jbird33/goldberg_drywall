// Need 3 of the (4) per standard code ----------------
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------------------------------

// This is my Jobs Routes -----------------------------

router.get('/show', ctrl.jobs.indexJob);

router.get('/:index', ctrl.jobs.showJob);


// router.get('/new', ctrl.jobs.newJob);

// Need this last of (4) -------------------------------
module.exports = router;
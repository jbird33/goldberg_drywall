// Standard needed line of code ----------------------

const Job = require('../models').Jobs;

// ---------------------------------------------------

const indexJob = (req, res) => {
    Job.findAll().then(jobs => {
        res.render('show.ejs', { jobs: jobs });
})
}

const showJob = (req, res) => {
    Job.findByPk(req.params.index)
    .then(foundJob => {
        console.log(foundJob);
        res.render('job.ejs', {job: foundJob})
    })
}


// const newJob = (req, res) => {
//     res.render('/new.ejs');
// }

// Export here ---------------------------------------

module.exports = {
    indexJob,
    showJob, 
    // newJob
}
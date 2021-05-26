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

const editJob = (req, res) => {
    Job.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedJob => {
        res.redirect(`/jobs/${req.params.index}`);
    })
}

const deleteJob = (req, res) => {
    Job.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/jobs/show'); 
    })
}

const newJob = (req, res) => {
    res.render('new.ejs');
}

const createJob = (req, res) => {
    Job.create(req.body)
    .then(newJob => {
        res.redirect(`/jobs/${newJob.id}`);
    })
}



// Export here ---------------------------------------

module.exports = {
    indexJob,
    showJob, 
    editJob,
    deleteJob,
    newJob,
    createJob

}
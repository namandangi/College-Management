const { Router } = require('express');
const { getAllProjects } = require('../controllers/projects');

const router = Router();

router.get('/', getAllProjects);

module.exports = router;
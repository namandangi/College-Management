const { Router } = require('express');
const { getAllProjects, addProject } = require('../controllers/projects');

const router = Router();

router.get('/', getAllProjects);
router.get('/add', addProject);

module.exports = router;
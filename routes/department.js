const { Router } = require('express');
const { getAllDepartment, addDepartment, searchDepartment, countDepartment } = require('../controllers/department');

const router = Router();

router.get('/', getAllDepartment);
router.post('/add', addDepartment);
router.get('/search', searchDepartment);
router.get('/count', countDepartment);

module.exports = router;
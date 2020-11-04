const { Router } = require('express');
const { getAllDepartment } = require('../controllers/department');

const router = Router();

router.get('/', getAllDepartment);

module.exports = router;
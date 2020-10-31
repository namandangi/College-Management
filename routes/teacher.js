const { Router } = require('express');
const { getAllTeachers } = require('../controllers/teacher');

const router = Router();

router.get('/', getAllTeachers);

module.exports = router;
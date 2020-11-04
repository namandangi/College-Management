const { Router } = require('express');
const { getAllCommittee } = require('../controllers/committee');

const router = Router();

router.get('/', getAllCommittee);

module.exports = router;
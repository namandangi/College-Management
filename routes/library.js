const { Router } = require('express');
const { getAllBooks, addBook, searchBooks, libraryCount } = require('../controllers/library');

const router = Router();

router.get('/', getAllBooks);
router.post('/add', addBook);
router.get('/search', searchBooks);
router.get('/count', libraryCount);

module.exports = router;
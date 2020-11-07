const { Router } = require('express');
const { getAllBooks, addBook, searchBooks, libraryCount, deleteBook, updateBook } = require('../controllers/library');

const router = Router();

router.get('/', getAllBooks);
router.post('/add', addBook);
router.get('/search', searchBooks);
router.get('/count', libraryCount);
router.post('/delete', deleteBook);
router.post('/update', updateBook)

module.exports = router;


exports.getAllBooks = (req, res) => {    
    const connection = req.app.get('connection');
    var { tag, order } = req.query;
    order = order === '-1' ? 'DESC': 'ASC';

    connection.query('SELECT * FROM library ORDER BY ' + tag + ' ' + order, (err, result) => {
        if(!err) {
            res.status(200).json(result);
        }
    });
}

exports.addBook = (req, res) => {
    const connection = req.app.get('connection');
    // const post = { bookid: 5, bname: 'Rich Dad Poor Dad', edition: 5, author: 'Robert Kiyosaki' };
    const { bookid, bname, edition, author } = req.body;
    const post = { bookid, bname, edition, author };
    connection.query('INSERT INTO library SET ?', [post], (err, result) => {
        if(!err) {
            res.status(201).json(result);
        }
    })
}

exports.searchBooks = (req, res) => {
    const connection = req.app.get('connection');
    var { tag, filter } = req.query;
    filter = '%' + filter + '%'
    connection.query(' SELECT * FROM library WHERE ' + tag + ' LIKE ?', [filter], (err, result) => {
        if(!err) {
            res.status(200).json(result);
        }
    })
}

exports.libraryCount = (req, res) => {
    const connection = req.app.get('connection');
    connection.query(
        'SELECT COUNT(DISTINCT bname) AS noOfBooks, COUNT(DISTINCT author) AS noOfAuthors, COUNT(edition) AS noOfEditions FROM library',
        (err, result) => {
            if(!err) {
                res.status(200).json(result);
            }
        })
}
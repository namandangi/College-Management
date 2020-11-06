exports.getAllBooks = async(req, res) => {    
    const connection = req.app.get('connection');
    var { tag, order } = req.query;
    order = order === '-1' ? 'DESC': 'ASC';
    const [rows, fields] = await connection.query('SELECT * FROM library ORDER BY ' + tag + ' ' + order);
    res.status(200).json(rows);
}

exports.addBook = async(req, res) => {
    const connection = req.app.get('connection');
    // const post = { bookid: 5, bname: 'Rich Dad Poor Dad', edition: 5, author: 'Robert Kiyosaki' };
    const { bookid, bname, edition, author } = req.body;
    const post = { bookid, bname, edition, author };
    const [rows, fields] = await connection.query('INSERT INTO library SET ?', [post]);
    res.status(200).json(rows);
}

exports.searchBooks = async(req, res) => {
    const connection = req.app.get('connection');
    var { tag, filter } = req.query;
    filter = '%' + filter + '%'
    const [rows, fields] = await connection.query(' SELECT * FROM library WHERE ' + tag + ' LIKE ?', [filter]);
    res.status(200).json(rows);
}

exports.libraryCount = async(req, res) => {
    const connection = req.app.get('connection');
    const [rows, fields] = await connection.query(
        'SELECT COUNT(DISTINCT bname) AS noOfBooks, COUNT(DISTINCT author) AS noOfAuthors, COUNT(DISTINCT edition) AS noOfEditions FROM library',
        );
    res.status(200).json(rows[0]);
}
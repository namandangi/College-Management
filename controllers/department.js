exports.getAllDepartment = async(req, res) => {
    const connection = req.app.get('connection');
    var { tag, order } = req.query;
    order = order === '-1' ? 'DESC': 'ASC';
    const [rows, fields] = await connection.query('SELECT * FROM department ORDER BY ' + tag + ' ' + order);
    res.status(200).json(rows);
}

exports.addDepartment = async(req, res) => {
    const connection = req.app.get('connection');
    const { did, dname, hod } = req.body;
    const post = { did, dname, hod };
    const [rows, fields] = await connection.query('INSERT INTO department SET ?', [post]);
    res.status(200).json(rows);
}

exports.searchDepartment = async(req, res) => {
    const connection = req.app.get('connection');
    var { tag, filter } = req.query;
    filter = '%' + filter + '%';
    const [rows, fields] = await connection.query(' SELECT * FROM department WHERE ' + tag + ' LIKE ?', [filter]);
    res.status(200).json(rows);
}

exports.countDepartment = async(req, res) => {
    const connection = req.app.get('connection');
    const [rows, fields] = await connection.query(
        'SELECT COUNT(DISTINCT d.dname) AS noOfDepartments, COUNT(DISTINCT f.fid) AS noOfFaculties, COUNT(DISTINCT s.sapid) AS noOfStudents FROM (department d INNER JOIN faculty f ON d.did = f.did) INNER JOIN student s'
    )
    res.status(200).json(rows[0]);
}
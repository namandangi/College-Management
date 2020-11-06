exports.getAllDepartment = async(req, res) => {
    const connection = req.app.get('connection');
    var { tag, order } = req.query;
    order = order === '-1' ? 'DESC': 'ASC';
    await connection.query('create temporary table if not exists tmpDept(dname varchar(50), fname varchar(50), strength int(11) )');
    const [rowsDetails, fields] = await connection.query('select d.dname, f.fname from department d inner join faculty f on d.did = f.did where d.hod = f.fid');
    const [rowsStrength, fieldsStrength] = await connection.query('select count(distinct f.fid)+count(distinct s.sapid) as strength from faculty f inner join student s on f.did = s.did group by f.did');
    rowsDetails.map((el,id) => {
        el.strength =(rowsStrength[id].strength);
    });
    console.log((rowsDetails));
    await connection.query('insert into tmpDept (dname, fname, strength) values ?', [rowsDetails.map(item => [item.dname, item.fname, item.strength])]);
    const [tmpRows, tmpFields] = await connection.query('SELECT distinct * FROM tmpDept ORDER BY ' + tag + ' ' + order);
    res.status(200).json(tmpRows);
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
    const [rows, fields] = await connection.query(' SELECT distinct * FROM tmpDept WHERE ' + tag + ' LIKE ?', [filter]);
    res.status(200).json(rows);
}

exports.countDepartment = async(req, res) => {
    const connection = req.app.get('connection');
    const [rows, fields] = await connection.query(
        'SELECT COUNT(DISTINCT d.dname) AS noOfDepartments, COUNT(DISTINCT f.fid) AS noOfFaculties, COUNT(DISTINCT s.sapid) AS noOfStudents FROM (department d INNER JOIN faculty f ON d.did = f.did) INNER JOIN student s'
    )
    res.status(200).json(rows[0]);
}
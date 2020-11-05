exports.getAllCommittee = async(req, res) => { //details of committee left, query ready
    const connection = req.app.get('connection');
    let { tag, order } = req.query;
    order = order === '-1' ? 'DESC': 'ASC';
    const [rows, fields] = await connection.query('SELECT * FROM committee ORDER BY ' + tag + ' ' + order);
    res.status(200).json(rows);
}

exports.addCommittee = async(req, res) => {
    const connection = req.app.get('connection');
    const  { committee_id, c_name, c_head, tech_c, compi_wins, events_organised } = req.body;
    const post = { committee_id, c_name, c_head, tech_c, compi_wins, events_organised };
    const [rows, fields] = await connection.query('INSERT INTO committee SET ?', [post]);
    res.status(201).json(rows);
}

exports.searchCommittee = async (req, res) => {
    const connection = req.app.get('connection');
    let { tag, filter } = req.query;
    filter = '%' + filter + '%';
    const [rows, fileds] = await connection.query(' SELECT * FROM committee WHERE ' + tag + ' LIKE ?', [filter]);
    res.status(200).json(rows);
}

exports.countCommittee = async (req, res) => {
    const connection = req.app.get('connection');
    const [rows1, fields1] = await connection.query(        
        'select sum(compi_wins) as victories, sum(events_organised) as events from committee')
        const { victories, events } = rows1[0];
    const [rows, fields ] = await connection.query(
        'select sum(cnt) as noOfStudents from (select count(sapid) as cnt from core_members union all select count(sapid) as cnt from co_members) tmp',
        )
        const { noOfStudents } = rows[0];
        res.status(200).send({ victories, events, noOfStudents });
}
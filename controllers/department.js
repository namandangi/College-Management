exports.getAllDepartment = (req, res) => {
    const connection = req.app.get('connection');

    connection.query('SELECT * FROM department', (err, result) => {
        if(!err) {
            res.status(200).json(result);
        }
    });
}

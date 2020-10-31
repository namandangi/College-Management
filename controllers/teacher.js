exports.getAllTeachers = (req, res) => {
    const connection = req.app.get('connection');

    connection.query('SELECT * FROM Teacher', (err, res) => {
        if(!err) {
            console.log(res);
        }
    });
}

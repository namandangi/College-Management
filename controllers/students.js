exports.getAllStudents = (req,res) => {
    const connection = req.app.get('connection');

    connection.query('SELECT * FROM Student', (err, res) => {
        if(!err) {
            console.log(res);
        }
    });
}
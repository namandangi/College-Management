exports.getAllProjects = (req, res) => {
    const connection = req.app.get('connection');

    connection.query('SELECT * FROM research_proj', (err, result) => {
        if(!err) {
            res.status(200).json(result);
        }
    });
}

const express = require('express');
const morgan = require('morgan');
const { dbConnection } = require('./config/db');
const { port } = require('./config/constants');
const { teacherRouter, studentRouter } = require('./routes/index');
const app = express();

async function main() {

    //DB setup
    const connection = await dbConnection();    
    app.set('connection', connection);

    // middleware setup
    app.use(express.json());
    app.use(express.static(`${__dirname}/public`));
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

    //API setup
    app.use('/api/teacher', teacherRouter);
    app.use('/api/student', studentRouter);

    return app;
}

main().then(server => {
    server.listen(port, () => {
        console.log(`server listening on port ${port}`);
    })
})
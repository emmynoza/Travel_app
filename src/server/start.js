// Setup Server
const app = require('./server')
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on localhost:${port}`);
}
const http = require('http');
const index = require('./index');
const { hostname } = require('os');

const port= process.env.PORT || 5000;
const server = http.createServer(index);

server.listen(port,  () => {
    console.log(`started on port ${port}`);
});

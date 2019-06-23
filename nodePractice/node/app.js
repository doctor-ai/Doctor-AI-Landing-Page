const server = require('http');
// const some = require('./modules');
const some = require('./seondmodule');

function takeRequest(req, respond) {
    respond.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    respond.write(some.navovariable);
    some.second('kishan');
    respond.end();
}

server.createServer(takeRequest).listen(8000);
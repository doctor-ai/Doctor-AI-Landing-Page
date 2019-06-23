const server = require('http');

function takeRequest(req, respond) {
    respond.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    respond.write('hello word lodamadarchod');
    respond.end();
}

server.createServer(takeRequest).listen(8000);
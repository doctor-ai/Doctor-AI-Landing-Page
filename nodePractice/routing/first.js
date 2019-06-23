var http = require('http');
var fs = require('fs')



function create(request, respond) {
    respond.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            respond.writeHead(404);
            respond.write('Sorry! File could not found');
        } else {
            respond.write(data)
        }
        respond.end();
    })
}
http.createServer(create).listen(8080);
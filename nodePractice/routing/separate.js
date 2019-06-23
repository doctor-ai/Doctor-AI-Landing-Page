var url = require('url');
var fs = require('fs');

function previous(path, respond) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            respond.writeHead(404);
            respond.write('Sorry! File could not found');
        } else {
            respond.write(data)
        }
        respond.end();
    })
}




//exports module
module.exports = {
    takeRequest: function (req, respond) {
        respond.writeHead(200, {
            'text-content': 'text-html'
        });

        var path = url.parse(req.url).pathname;
        /*this  line Do convert This into Object like 
                www.google.com
                    .com : "commersicial",
                    google:"domain",
                    pathname:"/google*/
        switch (path) {
            case '/Home':
                previous('index.html', respond)
                break;
            case '/login':
                previous('login.html', respond)
                break;
            default:
                previous('error.html', respond)
                break;
                respond.end()

        }
    }
}
console.log('Your webpage on 8080 port')
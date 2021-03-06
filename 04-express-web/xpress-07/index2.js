let http = require('http');
/* 
Please NOW try sing these urls:
 http://localhost:8080/basement?fisrtname=John&lastname=Doe
*/
let url = require("url");
let querystring = require('querystring');

let server = http.createServer(function (req, res) {
    let page = url.parse(req.url).pathname;
    console.log(page);
    let params = querystring.parse(url.parse(req.url).query);
    if (params.firstname && params.lastname){
        console.log(('Your name is ' + params['firstname'] + ' ' + params['lastname']));
    }
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (page === '/name' || params.firstname || params.lastname) {
        res.write('<!DOCTYPE html>' +
            '<html>' +
            ' <head>' +
            ' <meta charset="utf-8" />' +
            ' <title>My Node.js page!</title>' +
            ' </head>' +
            ' <body>' +
            ` <p>Hola Bienvenido <strong>${params.firstname} ${params.lastname}</strong>!</p>` +
            ' </body>' +
            '</html>');
    } else if (page === '/basement') {
        res.write('You\'re in the wine cellar. These bottles are mine!');
    } else if (page === '/floor/1/bedroom') {
        res.write('Hey, this is a private area!');
    }
    res.end();
});
server.listen(8080);
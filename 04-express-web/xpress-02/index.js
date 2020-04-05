var http = require('http');

var server = http.createServer(function (req, res) {
    //here we should understand the one-thread nature of node
    let cb = function () {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hi everybody on Course!');
    }
    setTimeout(cb, 10000) //carga un por uno en sun solo hilo 
});
server.listen(8080);
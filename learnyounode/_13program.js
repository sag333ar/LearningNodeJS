var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {
    if (request.method == 'GET') {
        var query = url.parse(request.url, true).query;
    }
});
server.listen(process.argv[2]);
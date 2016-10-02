var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method != 'GET')
        return 'get me a GET\n';
var times = {
    "/api/parsetime": function(parsedUrl) {

        var dataz = parsedUrl.query['iso'].split('T');
        var datas = dataz[1].split(':');
        return {hour: parseInt(datas[0]) + 2, minute: parseInt(datas[1]), second: parseInt(datas[2])};

    },
    "/api/unixtime": function (parsedUrl) {
        var date = new Date(parsedUrl.query['iso']);
        var d = date.getTime();
        return {unixtime: d}
    }
};


    var parsedUrl = url.parse(req.url, true);


    resource = times[parsedUrl.pathname];
    res.writeHead(200, {'Content-Type': 'application/json'});


    res.end(JSON.stringify(resource(parsedUrl)));
});

server.listen(process.argv[2]);
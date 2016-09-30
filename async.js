var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];


function getIt(url, callback) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) return callback(err);
            callback(null, data);
        }));
    });
}
getIt(urls[0], function (err, data) {
    console.log(data.toString());
    getIt(urls[1], function (err, data) {
        console.log(data.toString());
        getIt(urls[2], function (err, data) {
            console.log(data.toString());
        })
    })
});


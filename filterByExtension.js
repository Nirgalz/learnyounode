
var fs = require('fs');

//filter by extension module
module.exports = function filterDir(path, ext, callback) {
    var type = '.' + ext;
    var data = [];
    fs.readdir(path, function (err, list) {
        if (err) return callback(err);
        list.forEach(function (element) {
            if (element.toString().endsWith(type)) {
                data.push(element);
                console.log(element);
            }
        });
        callback(null, data)
    })
};



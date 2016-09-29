
var fs = require('fs');

//ex4
/*
fs.readFile(process.argv[2], function (err, data) {
    var count = data.toString().split('\n').length - 1;
    console.log(count);
});*/


//ex5
function filterDir(path, ext) {
    var type = '.' + ext;
    fs.readdir(path, function (err, list) {
        list.forEach(function (element) {
            if (element.toString().endsWith(type)) {
                console.log(element);
            }
        })
    })
}

filterDir(process.argv[2], process.argv[3]);

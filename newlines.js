
var fs = require('fs');

//ex4
fs.readFile(process.argv[2], function (err, data) {
    var count = data.toString().split('\n').length - 1;
    console.log(count);
});
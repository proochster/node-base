const fs = require('fs');

// reddir is an asynchronous method
var fileSystemInfo = fs.readdir('./', function(err, files){
    console.log("--- FS INFO");
    if (err) console.log("Error: ", err);
    else console.log("Root: ", files);
});

module.exports = fileSystemInfo;
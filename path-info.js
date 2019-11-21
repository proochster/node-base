const path = require('path'); // Node native module

function logPathData(data){
    var parsedPath = path.parse(data);
    console.log(parsedPath);
}

module.exports = logPathData;
const pathInfo = require('./path-info');
const os = require('./os-info');
const processLog = require('./process-info');
const fsInfo = require('./filesystem-info');

pathInfo(__filename);
os();
processLog();
fsInfo;
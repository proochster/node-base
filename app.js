const pathInfo = require('./path-info');
const os = require('./os-info');
const processLog = require('./process-info');

pathInfo(__filename);
os();
processLog();
const pathInfo = require('./path-info');
const os = require('./os-info');
const processLog = require('./process-info');
const fsInfo = require('./filesystem-info');

const Subscription = require('./event-emitter');
const emitter = new Subscription();

pathInfo(__filename);
os();
processLog();
fsInfo;

emitter.on('userSubscribed', function(eventArg){
    console.log("User subscribed at", eventArg.date);
    // Do something when user subscribes
});

emitter.sendEvent()
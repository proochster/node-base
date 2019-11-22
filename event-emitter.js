const EventEmitter = require('events');

class UserSubscribed extends EventEmitter {
    sendEvent(){
        this.emit('userSubscribed', {date: Date.now()});
    }
}

module.exports = UserSubscribed;

// Set an event listener
// emitter.on('userSubscribed', function(eventArg){
//     console.log("User subscribed at", eventArg.date);
//     // Do something when user subscribes
// });

const os = require('os'); // Node native module

function logOsData(){
    console.log("--- OS INFO");
    console.log(`Architecture: ${ os.arch() }`);
    console.log(`Total memory: ${ os.totalmem() }`);
    console.log(`Free memory: ${ os.freemem()} `);
    console.log(`Platform: ${ os.platform()} `);
    console.log(`Type: ${ os.type()} `);
    console.log(`Uptime: ${ os.uptime()} `);
    // console.log(`CPUs: ${ os.cpus() }`);
    // console.log(`User info: ${ os.userInfo()} `);
    // console.log(os);
}

module.exports = logOsData;
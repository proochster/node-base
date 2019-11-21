function memoryStats(){
    console.log("--- PROCESS INFO");
    console.log(`Resident Set Size: ${ process.memoryUsage().rss }`);
    console.log(`Total Heap Size: ${ process.memoryUsage().heapTotal }`);
    console.log(`Used Heap: ${ process.memoryUsage().heapUsed }`);
    console.log(`External: ${ process.memoryUsage().external }`);
}
module.exports = memoryStats;
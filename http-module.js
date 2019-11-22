const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write("Node HTTP module in action");
        res.end();
    }
});

server.listen(3000);
console.log('Server listening on port 3000');
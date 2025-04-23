import 'dotenv/config';

import { createServer } from 'http';


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';


const server = createServer((req, res)=> {
    res.writeHead(200, { "content-type": "text/plain"});
    res.end("Hello World!\n");
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
    console.log(`Press Ctrl+C to quit`);    
});
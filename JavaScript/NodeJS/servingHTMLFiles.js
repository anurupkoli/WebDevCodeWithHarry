const http = require('http')
const fs = require('fs')
const file = fs.readFileSync('boxTextShadow.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(file)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log('Server is running at port 80')
})
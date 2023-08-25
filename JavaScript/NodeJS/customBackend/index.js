const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

let index = fs.readFileSync('./JavaScript/NodeJS/customBackend/index.html')
let home = fs.readFileSync('./JavaScript/NodeJS/customBackend/home.html')
let services = fs.readFileSync('./JavaScript/NodeJS/customBackend/services.html')
let aboutUs = fs.readFileSync('./JavaScript/NodeJS/customBackend/aboutUs.html')
let content = fs.readFileSync('./JavaScript/NodeJS/customBackend/content.html')
let contact = fs.readFileSync('./JavaScript/NodeJS/customBackend/contactUs.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    if(url == '/'){
        res.end(index);
    }
    else if(url == '/home.html'){
        res.end(home);
    }
    else if(url == '/services.html'){
        res.end(services);
    }
    else if(url == '/aboutUs.html'){
        res.end(aboutUs);
    }
    else if(url == '/content.html'){
        res.end(content);
    }
    else if(url == '/contactUs.html'){
        res.end(contact);
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
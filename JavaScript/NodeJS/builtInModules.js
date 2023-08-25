const fs = require('fs');
let text = fs.readFileSync('JavaScript/NodeJS/anurup.txt', 'utf-8');

console.log("The content of the file is");
console.log(text);

text = text.replace('Anurup', 'abhay');

console.log("Creating new file....");
fs.writeFileSync('JavaScript/NodeJS/abhay.txt', text);

console.log(text);
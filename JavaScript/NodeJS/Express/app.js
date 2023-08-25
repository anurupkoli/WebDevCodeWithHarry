const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 80;

app.use('/static', express.static('static'))


app.get('/', (req,res)=>{
    res.status(200).send('This is home')
})
app.get('/about', (req,res)=>{
    res.status(200).send('this is about');
})
app.get('/services', (req,res)=>{
    res.send('This is services.html');
})
app.get('/contact', (req,res)=>{
    res.send('This is contact.html');
})
app.post('/contact', (req,res)=>{
    res.send('posted in contact.html')
})



app.listen(port, ()=>{
    console.log(`Running at port: ${port}`);
})
const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>
res.sendFile(path.join(__dirname,'./public','./index.html'))
)

app.get('/aboutus',(req,res)=>
res.sendFile(path.join(__dirname,'./public','./aboutUs.html'))
)

app.listen(3000,()=>
console.log("App running on port 3000")
)
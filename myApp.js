var express = require('express');
var app = express();

// app.use(express.static('views'))
app.use(express.static('/public'))
app.use('/public',express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

































 module.exports = app;

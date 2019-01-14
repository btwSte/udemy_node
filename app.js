var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<h1>Portal de noticias.</h1>");
});

app.get('/tecnologia', function(req, res){
    res.send("<h1>Noticias de Tecnologia.</h1>");
});


app.listen(3010, function(){
    console.log("servidor rodando express");
});
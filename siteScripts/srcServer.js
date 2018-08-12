var express = require('express');
var path = require('path');
var open = require('open');
var serveStatic = require('serve-static');
var serveIndex = require('serve-Index');

var port = 3000;
var app = express();

app.use('/phaser', express.static('node_modules/phaser'), serveIndex('node_modules/phaser', {'icons': true}))
app.use('/assets', express.static('assets'), serveIndex('assets', {'icons': true}))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open ('http://localhost:' + port);
    }
});

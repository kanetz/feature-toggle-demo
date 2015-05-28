var express = require('express');
var app = express();
var router = express.Router();

var fs = require('fs');
var featureToggles = JSON.parse(fs.readFileSync(__dirname +'/feature-toggles.json', {encoding: 'utf8'}));
console.log(featureToggles);

app.use(express.static(__dirname + '/../src'));

app.get('/api/features', function(req, res) {
    res.json(featureToggles);
});

app.get('/api/toggle-features-on', function(req, res) {
    featureToggles[0].active = true;
    res.json(featureToggles);
});

app.get('/api/toggle-features-off', function(req, res) {
    featureToggles[0].active = false;
    res.json(featureToggles);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
var express = require("express");
var path = require('path');

var serverapp = express();

serverapp.set('port', (process.env.PORT || 3000));
serverapp.use('/', require('./routes/index'));
// expose node_modules to client app
serverapp.use(express.static(__dirname));

serverapp.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

serverapp.listen(serverapp.get('port'), function() {
    console.log('Server listening on port '+ serverapp.get('port'));
});
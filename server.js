var express = require('express');
var app = express();
app.set('port', 3000);

var middleWare = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req, res, next) {
    var currentDate = new Date().toString();
    console.log('Request: ' +  currentDate + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleWare.logger);


app.get('/about', middleWare.requireAuthentication, function(req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Express server started on port ' + app.get('port'));
});

module.exports = {
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

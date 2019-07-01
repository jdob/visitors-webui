const proxy = require('http-proxy-middleware');

let host = process.env.REACT_APP_SERVICE_HOST || 'localhost'
let port = process.env.REACT_APP_SERVICE_PORT || '8000'
let url = 'http://' + host + ':' + port

module.exports = function(app) {
  app.use(proxy('/visitors/', { target: url }));
};

var express = require('express');
var app = express();
var check = require('./flow_check');
var bodyParser = require('body-parser')

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}

app.use(express.static('./dist', {}));
app.use(bodyParser.json());
app.use(clientErrorHandler);
app.use(errorHandler);

app.post('/flow_check', function (req, res) {
  check(req.body.source, (json) => {
    res.json(json);
  });
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('app listening at http://%s:%s', host, port)

});

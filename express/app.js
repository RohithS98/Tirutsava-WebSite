const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200
}

const queries = require('./queries');
const routes = require('./index');
const express = require('express');

const app = express();
app.use(cors(corsOptions))

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const port= process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} `));

app.use('/',routes);

//for detecting any error
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;

const cors = require('cors')

const corsOptions = {
  origin: 'http://10.21.24.135',
  optionsSuccessStatus: 200
}

const queries = require('./queries');
const routes = require('./index');
const express = require('express');

const app = express();
app.use(cors());
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');

  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type, Accept');
  next();

  app.options('*', (req, res)=>{
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});

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

var express = require('express');
var router = express.Router();

var db = require('./queries');

//write the functions for retrieving or posting the request using the router
// write the code for posting the request in the form of {router.$request($end point,$db_function)}


router.get('/api/user',db.getUser);
router.post('/api/user',db.addUser);

router.post('/api/team',db.addTeam);

//export your modules
module.exports = router;
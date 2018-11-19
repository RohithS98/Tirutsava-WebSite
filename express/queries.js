var pgp = require('pg-promise')();
var connectionString = 'postgres://postgres:root@localhost:5432/tirutsava'; //paste the connection string from app.js
var db  = pgp(connectionString);
//adding query funcitons 

//for sending get request to people
function getUser(req,res,next){
    db.any('SELECT * FROM users ')
    .then(function (data) {
        console.log("SELECTed users.")
        res.status(200)
          .json({
            status: 'Success',
            data: data,
            message: 'Retrieved All Users'
          });
    })
}

//for sending post request to people
function addUser(req,res,next){
    db.none('INSERT INTO users ' + 'values( ${uname}, ${name} , ${email} , ${institute} , ${qualification})',req.body)
    .then(function() {
        console.log("INSERTed into users");
        res.status(200)
        .json({
          status: 'Success',
          message: 'Inserted user.'
        });
    })
    .catch(function (err) {
        return next(err);
      });

}

function getTeam(req,res,next){
    db.any('SELECT * FROM mad ')
    .then(function (data) {
        console.log("SELECTed madaboutideas.")
        res.status(200)
          .json({
            status: 'Success',
            data: data,
            message: 'Retrieved All MadAboutIdeas Teams'
          });
    })
}

//for sending post request to people
function addTeam(req,res,next){
    req.body.age = parseInt(req.body.age);
    db.tx(t => {
        var queryList1 = [], i, qry;
        qry = 'INSERT INTO mad values( ${team_name}, ${mentor_name} , ${mentor_email} , ${team_contact},  ${mentor_number} ';
        req.body.num = parseInt(req.body.num);
        for(i = 0 ; i < req.body.num ; i++){
            console.log(req.body.members[i].username);
            queryList1.push(t.none('INSERT INTO users values( ${username}, ${name}, ${email}, ${institute} , ${qualification} )',req.body.members[i]));
            var tmpuser = req.body.members[i].username;
            qry += `, '${tmpuser}'` ;
        }
        qry+= ')';
        queryList1.push(t.none(qry,req.body));
        return t.batch(queryList1);
    })
    .then(function(){
        console.log("INSERTed into teams and users");
        res.status(200)
        .json({
          status: 'Success',
          message: 'Inserted team.'
        });
    })
    .catch(function (err) {
        console.log(err);
        return next(err);
      });

}

module.exports = {

//enter all the registration functions
addUser : addUser,
getUser : getUser,
addTeam : addTeam,
getTeam : getTeam
};
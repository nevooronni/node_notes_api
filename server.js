const express = require('express');
const MongoClient = require('mongodb').MongoClient; //MongoClient interacts with your database
const bodyParser = require('body-parser');

//initialize app as instance of express
const app = express();

//app to listen to http requests
const port = 8000;

//use body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

//dont have a db setup yet you are just passing an empty object
require('./app/routes')(app, {});
app.listen(port, () => { console.log('We are live on ' + port);});

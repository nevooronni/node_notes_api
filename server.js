const express = require('express');
const mongoose = require('mongoose'); //use to connect with your db on mongoDB Atlas
const MongoClient = require('mongodb').MongoClient; //MongoClient interacts with your database
const bodyParser = require('body-parser');
const db = require('./config/db'); //connect database instance

//initialize app as instance of express
const app = express();

//app to listen to http requests
const port = 8000;

//use body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

//contect to mongoDB Altas cluster
// mongoose.connect(db.url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("MongoDB Connected…")
// })
// .catch(err => console.log(err))

// const database = database.db
// app.listen(port, () => {    console.log('We are live on ' + port);  });               

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err) 
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
}) 







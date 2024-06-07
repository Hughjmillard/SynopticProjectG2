const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('Public'));

const indexRouter = require('./Routes/index');
app.use('/', indexRouter);

const secondRouter = require('./Routes/symptoms');
app.use('/symptoms', secondRouter);

const thirdRouter = require('./Routes/contact');
app.use('/contact', thirdRouter);

const fourthRouter = require('./Routes/learning');
app.use('/learning', fourthRouter);

app.listen(port,(error)=>{
    if(error){
        console.log(`error`,error);
    }else{
        console.log(`port is running on ${port}!`);
    }
});

let mysql =require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  
    var query1 = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    var query2 = "CREATE TABLE orders (product VARCHAR(255), quantity INT)";
  
    con.query(query1, function (err, result) {
      if (err) throw err;
      console.log("Table 'customers' created");
      
    con.query(query2, function (err, result) {
        if (err) throw err;
        console.log("Table 'orders' created");
      });
    });
  });
  

  // create the database
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE diagnosis", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


// drop the database if it isnt working
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("drop database diagnosis", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });

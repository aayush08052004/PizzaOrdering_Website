const mysql = require('mysql2');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var express = require('express');
var app = express();
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'root' 
});
connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL server');
  connection.query('CREATE DATABASE IF NOT EXISTS LidoPizza', function(err, result) {
    if (err) throw err;
    console.log('Database created successfully');
    connection.query('USE LidoPizza', function(err, result) {
      if (err) throw err;
      console.log('Using database: LidoPizza');
      connection.query(`CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        contact VARCHAR(10) NOT NULL,
        address VARCHAR(255) NOT NULL
      )`, function(err, result) {
        if (err) throw err;
        console.log('Customers table created successfully');
      });
      connection.query(`CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        size VARCHAR(50) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        quantity INT NOT NULL
      )`, function(err, result) {
        if (err) throw err;
        console.log('Cart_items table created successfully');       
      });
    });
  });
});
connection.connect(function(error) {
    if (error) throw error;
    else console.log("connected to the database successfully!");
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/html");
});
app.post("/", encoder, function(req, res) {
  var name = req.body.name;
  var contact = req.body.contact;
  var address = req.body.address;
  connection.query("Insert Into customers Value (name,contact,address)", [name, contact, address], 
  function(error, results) {
    if (err) throw err;
    console.log('Information is updated in database');});
});
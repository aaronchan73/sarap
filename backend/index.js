require("dotenv").config();

const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send('test');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.PASS,
//   database: "sarapdb",
// });

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].solution);
// });

// connection.end();

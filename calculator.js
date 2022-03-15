const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// For regular addition calculator
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of your calculation is " + result + ".");
});

// For BMI calculator
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post("/bmicalculator", function(req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var answer = (weight / Math.pow(height, 2) * 703);
  answer = answer.toFixed(2);

  res.send("The result of your calculation is a BMI of " + answer + ".")
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

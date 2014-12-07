var express = require('express');
 //testet
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenki');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userResources = require("./user.resource.js")
var elasticsearch = require('elasticsearch');



var jsonParser = bodyParser.json({ limit: "10mb", extended: true });
var urlParser = bodyParser.urlencoded({ limit: '10mb', extended: true, type: 'application/json' });
app.use(jsonParser)
app.use(urlParser)
var http = require('http').Server(app);

app.use("", userResources)


var port = 8080;

if(process.argv.length > 2 ){
    if(!isNaN(process.argv[2])){
      
      port = process.argv[2]
    }
  }

  http.listen(port, function () {
    console.log(`App started`)
  console.log(`App listening on port ${port}!`)
  });
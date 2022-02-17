var express = require('express')
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

var port = 8080;

if(process.argv.length > 2 ){
    if(!isNaN(process.argv[2])){
      
      port = process.argv[2]
    }
  }

app.listen(port, () => {
  console.log(`App started`)
  console.log(`App listening on port ${port}!`)
});
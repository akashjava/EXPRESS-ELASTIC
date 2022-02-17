const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
if(process.argv.length > 2 ){
    if(!isNaN(process.argv[2])){
      
      port = process.argv[2]
    }
  }

app.listen(port, () => {
  console.log(`App started`)
  console.log(`App listening on port ${port}!`)
});
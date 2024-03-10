const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.listen(port,()=>{
  console.log("The port is active on port no ${port}");
})
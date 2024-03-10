const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors);

app.get('/',(req,res)=>{
    const email =  req.query.email;
    const password = req.query.password;
    res.send("User has been registered");
})

app.listen(port,()=>{
    console.log(`The server is listening on ${port}`)
});
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.get('/', (req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const Interest = principal*rate*time;
    res.send(Interest.toString());
})

app.listen(port,()=>{
console.log(`The server listening on ${port}`);
});
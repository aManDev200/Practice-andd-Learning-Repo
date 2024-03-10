const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.json()); // Corrected middleware usage

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`The port is active on port no ${port}`); // Corrected string interpolation
});

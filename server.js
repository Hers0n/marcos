const express = require('express');
const path = require('path');

const public_dir = path.resolve(__dirname, 'public');

const app = express();


app.use(express.static(public_dir));

app.get('/', function (req, res) {
    res.sendFile(path.join(public_dir, 'index.html'));
});

app.post('/login', function (req, res) {
    res.send(JSON.stringify(req));
});

app.listen(9090, function () {
    console.log('deu');
});
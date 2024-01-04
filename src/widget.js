const express = require("express");

const app = express.Router();

app.get('/', (req,res) => {
    res.send('this is widget')
})

app.get('/solvedac', (req,res) => {
    res.sendFile(__dirname + '/widget/solvedac.html');
})
module.exports = app;
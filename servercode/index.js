var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var app = express();

const route = require('./routes/route.js');

mongoose.connect('mongodb://localhost:27017/basketdb',{ useNewUrlParser: true });

mongoose.connection.on('connected',() => {
    console.log('mongodb connected');
});

mongoose.connection.on('error',(err) => {
    console.log(err);
});

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('you are on port ' + PORT);
});


app.get('/',(req, res, next) => {
    res.send('you are on node js server with port ' + PORT);
});

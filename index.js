const express = require('express');
const hbs = require('hbs');//handlebars, why wasn't this told to students? Perfect example why academia is useless
const fs = require('fs');
const path = require('path');

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); //setting up for using handlebars partials
app.set('view engine', 'hbs');//setting the view engine as hbs. But what is the view engine?
app.use(express.static(__dirname + '/public')); //static content serving,using middleware
// app.engine('html', require('hbs').sendFile);

app.use('/maintenance', (req, res, next) => {//serves up the maintenance page
    res.render('maintenance.hbs');
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Bad request. You might want to check the URL."
    });
});

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/tic-tac-toe.html'))
});


app.listen(3000, () => {
    console.log('Listening on localhost:3000');
});
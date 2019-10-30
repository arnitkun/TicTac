const express = require('express');
const hbs = require('hbs');//handlebars, why wasn't this told to students? Perfect example why academia is useless
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); //setting up for using handlebars partials
app.set('view engine', 'hbs');//setting the view engine as hbs. But what is the view engine?
app.use(express.static(__dirname + '/public')); //static content serving,using middleware

app.use('/maintenance', (req, res, next) => {//serves up the maintenance page
    res.render('maintenance.hbs');
});
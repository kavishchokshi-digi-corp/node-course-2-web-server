const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper("getCurrentYear", () => {

    return new Date().getFullYear()
});

// app.use((req, res, next) => {

//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;

//     console.log(log);
//     fs.appendFile('server.log', log+'\n');
//     next();

// });


app.use(express.static(__dirname + '/public'));

hbs.registerHelper("screamIT", (text) => {
    return text.toUpperCase();
});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pagetitle: 'Home page',
        welcomeText: 'Welcome to my website....'
    });
    });

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pagetitle: 'About page',
        
    });  
});

app.listen(port, () => {
    console.log(`Congratulations, your app is in running mode on port ${port}`);
});
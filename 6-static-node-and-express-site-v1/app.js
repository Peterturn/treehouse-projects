const express = require('express');
const app = express();
const { projects } = require('./data.json');
app.set('view engine', 'pug');
app.use( '/static', express.static('public') );

app.get('/', function(req, res, next) {
    res.render( 'index', { projects } );
});

app.get('/about', function(req, res, next) {
    res.render( 'about', { projects } );
});
app.listen(3000);
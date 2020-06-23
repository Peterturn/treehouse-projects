const express = require('express');
const app = express();
const { projects } = require('./data.json');
app.set('view engine', 'pug');
app.use( '/static', express.static('public') );

/* GET home page. */
app.get('/', function(req, res, next) {
    res.render( 'index', { projects });
});

/* GET about page. */
app.get('/about', function(req, res, next) {
    res.render( 'about', { projects } );
});

/* GET projects page. */
/** Code snippet from Unit 6 treehouse project*/
app.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    if (project) {
      res.render('project', { project });
    } else {
      res.sendStatus(404);
    }
  });

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });
  
app.listen(3000, () => {
    console.log("your being served on port 3000");    
});
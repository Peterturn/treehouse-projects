const express = require('express');
const app = express();
const { projects } = require('./data.json');
app.set('view engine', 'pug');
app.use( '/static', express.static('public') );

/* GET home page. */
app.get('/', function(req, res, next) {
    res.render( 'index', { projects } );
});

/* GET about page. */
app.get('/about', function(req, res, next) {
    res.render( 'about', { projects } );
});

/* GET recipe page. */
app.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    if (project) {
      res.render('project', { project });
    } else {
      res.sendStatus(404);
    }
  });

  // catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
  });
app.listen(3000);
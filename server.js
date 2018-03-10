const express = require('express');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const control = require('./controllers');
const bodyParser = require('body-parser')


app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());       // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
  
  // Set up home page as a simple render of the page.
  server.get('/', (req, res) => {
    let itemData;
    control.posts.list().then(result=> {
      itemData = {data: result, status: true};
      return app.render(req, res, '/', {itemData})
    }).catch(err => {
      itemData = {data: err, status: false};
      return app.render(req, res, '/', {itemData})
    });
  });

  //Send the post-new user interface part in which client will enter the data
  server.get('/post-new', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/post-new', mergedQuery);
  });
  
  //It will used to store the data in the database and send the response w.r.t to the data
  server.post('/post-new', (req, res) => {
    control.posts.create(req).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(400).json(err)
    });
  });

  //Getting the data for the single post in the blog
  server.get('/post/:id', (req, res) => {
    const actualPage = '/post'
    let queryParams = {}
    //Getting the post with the url as the id from it.
    control.posts.single(req.params.id).then(result=> {
      queryParams = {id: req.params.id, data: result, status: true};
      return app.render(req, res, actualPage, queryParams)
    }).catch(err => {
      queryParams = {id: req.params.id, data: err, status: false};
      return app.render(req, res, actualPage, queryParams)
    });
  });

  //For api urls
  server.get('/_posts', (req, res) => {
    control.posts.list().then(result => {
      result = {data: result, status: true};
      res.status(200).json(result);
    }).catch(err => {
      err = {data: err, status: false};
      res.status(400).json(err);
    });
  });

   //For single page api
   server.get('/_posts/:id', (req, res) => {
    control.posts.single(req.params.id).then(result => {
      result = {data: result, status: true};
      res.status(200).json(result);
    }).catch(err => {
      err = {data: err, status: false};
      res.status(400).json(err);
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  //Port of the blog
  const port = process.env.PORT || 3000;
  
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});
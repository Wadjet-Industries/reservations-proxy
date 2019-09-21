require('newrelic');
const express = require('express');
const morgan = require('morgan');
// const proxy = require('express-http-proxy');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;


app.use(morgan('dev'));
app.use('/restaurants/:id', express.static('public'));

app.get('/api/restaurants/:id' , (req, res) => {
  console.log('hi', req.params);
  res.redirect(`http://localhost:3002/api/restaurants/${req.params.id}`);
})


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });

// app.use('/restaurants/:id' , proxy('http://localhost:3000' , {
//   // console.log('Currently in proxy: Re-routing to service')
//   forwardPath: function(req, res) {
//     return '' + req.url
//   }
// }))
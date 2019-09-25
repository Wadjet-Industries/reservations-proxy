require('newrelic');
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;


app.use(morgan('dev'));

app.use('/restaurants/:id', express.static('public'));

app.use('/' , express.static('loader'));



app.get('/api/restaurants/:id' , (req, res) => {
  res.redirect(`http://ec2-3-15-165-218.us-east-2.compute.amazonaws.com:3002/api/restaurants/${req.params.id}`);
})


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
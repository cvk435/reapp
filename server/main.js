var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');

const app = express();
const port =8081;
var addPosts = require('../routes/addPosts')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(__dirname + "/../public"));
app.use('/addposts',addPosts)


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});


app.get('*', function (request, response) { 
  response.sendFile(path.resolve(__dirname + '/../public', '', 'index.html'));
});
const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});
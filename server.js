var express = require('express'),
	app = express(), 
	bodyParser = require('body-parser'),
	db = require('./models');


app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	
	res.render('index', {name: 'URL shortner'});
	});
app.post('/', function(req, res) {

  var newUrl = {
    id: req.body.id,
    url: req.body.url,
    hash: req.body.hash,
  }

app.listen(3000);
console.log('Running on the smooth port 3000');
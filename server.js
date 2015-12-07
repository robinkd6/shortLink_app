var express = require('express'),
	app = express();


app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	
	res.render('index', {name: 'URL shortner'});
	});


app.listen(3000);
console.log('Running on the smooth port 3000');
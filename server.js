var express 			= require('express'),
	app					= express();
	bodyParser 			= require('body-parser'),
	mongoose			= require('mongoose'),
	meetupsController 	= require('./server/controllers/meetups-controller');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mean-demo2');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

//any file after /js will be returned statically from express. This means we don' thave to include /client in the route names anymore
app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);
/*
app.listen(3000, function() {
	console.log('I\'m Listening...');
});
*/
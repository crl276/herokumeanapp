var express 			= require('express'),
	http 				= require ('http');
	mongoose 			= require ("mongoose"); 
	app					= express();
	bodyParser 			= require('body-parser'),
	mongoose			= require('mongoose'),
	meetupsController 	= require('./server/controllers/meetups-controller');

 var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose';

    var theport = process.env.PORT || 5000;

    mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });


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
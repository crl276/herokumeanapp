//attaches controller to app, which is what we named the angular module in app.js
//Names this controller meetupsController, and then passes the $scope as an argument so it can talk to the view
//Then it declares a dependency  for the meetups controller on $resource

app.controller('meetupsController', ['$scope', '$resource', 
	function($scope, $resource) {

//meetup is equal to resource. And then we pass it the base url for our restful server. The resource is the model in MVC
	var Meetup = $resource('/api/meetups');

	Meetup.query(function(results) {
		$scope.meetups = results;
	});

	$scope.meetups = []
//when you call create meetup on the client side, it will now make a call to the $resource on the server side and 
//try to save onto the db
	$scope.createMeetup = function() {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function(result) {
			$scope.meetups.push(result);
			$scope.meetupName = '';
		});
	}

}]);


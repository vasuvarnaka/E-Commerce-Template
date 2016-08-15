angular.module('ECommercetemplate.template',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/template',{
			templateUrl: 'template/template.html',
			controller: 'TemplateCtrl'
		}).
		when('/template/:templateId',{
			templateUrl: 'template/temp-info.html',
			controller: 'TempInfoCtrl'
		});
}])
.controller('TemplateCtrl',['$scope','$http', function($scope, $http){
	$http.get('/Json/template.json').success(function(data){
		$scope.template = data;
	});
}])
.controller('TempInfoCtrl',['$scope', '$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter){
	console.log("In TempInfoCtrl");
	var templateId = $routeParams.templateId;
	console.log(templateId);
	$http.get('/Json/template.json').success(function(data){
		 $scope.template = $filter('filter')(data, function(d){
		  return d.id == templateId;	  
		})[0]; 
		console.log($scope.template);
		 $scope.imageFull = $scope.template.images[0].name;
	});
}]);
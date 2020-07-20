angular.module("demoRouteApp", 
[
	"chieffancypants.loadingBar", 
	"ngAnimate", 
	"ngRoute", 
	"toaster", 
	"demoRouteControllers"
])
.config(function(cfpLoadingBarProvider) {
   cfpLoadingBarProvider.includeSpinner = true;
   cfpLoadingBarProvider.includeBar = true;
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Member', {templateUrl: 'partials/member.html', controller: 'memberController'});
  $routeProvider.when('/Member/:memberId', {templateUrl: 'partials/register.html', controller: 'registerController'});
  $routeProvider.when('/Register', {templateUrl: 'partials/register.html', controller: 'registerController'});
  $routeProvider.otherwise({redirectTo: '/Member'});
}]);
angular.module("app", ["chieffancypants.loadingBar", "ngAnimate", "ngRoute"])
.config(function(cfpLoadingBarProvider) {
   cfpLoadingBarProvider.includeSpinner = false;
   cfpLoadingBarProvider.includeBar = true;
})
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/Member', {
				templateUrl: 'member.html',
				controller: 'MemberController',
				controllerAs: 'member'
			})
			.when('/Member/:memberId', {
				templateUrl: 'member.html',
				controller: 'MemberController',
				controllerAs: 'member'
			})
			.when('/Register', {
				templateUrl: 'member.html',
				controller: 'MemberController',
				controllerAs: 'member'
			});
	 
		// configure html5 to get links working on jsfiddle
		//$locationProvider.html5Mode(true);
}])
.controller('MemberController', function($routeParams) {
    this.name = "MemberController";
    this.params = $routeParams;
	
	this.save = function() {
		
	};
 })
.controller('HomeController', function($scope, $location, $http, cfpLoadingBar) {

  $scope.friends = [
	{id: 1, name:'John', age:25, gender:'boy'},
	{id: 2, name:'Jessie', age:30, gender:'girl'},
	{id: 3, name:'Johanna', age:28, gender:'girl'},
	{id: 4, name:'Joy', age:15, gender:'girl'},
	{id: 5, name:'Mary', age:28, gender:'girl'},
	{id: 6, name:'Peter', age:95, gender:'boy'},
	{id: 7, name:'Sebastian', age:50, gender:'boy'},
	{id: 8, name:'Erika', age:27, gender:'girl'},
	{id: 9, name:'Patrick', age:40, gender:'boy'},
	{id: 10, name:'Samantha', age:60, gender:'girl'}
  ];
  
  $scope.province = [
	  {id: 1, name: "กรุงเทพ"},
	  {id: 2, name: "ชลบุรี"},
	  {id: 3, name: "เชียงใหม่"}
  ];
  
  $scope.district = [];
  $scope.selectedProvince = 0;
  
  $scope.changeProvince = function() {
	  if ($scope.selectedProvince == 0) {
		  $scope.district = [];
	  } else {
		  $scope.district = [
			  {id: 1001, name: "เขต 1"},
			  {id: 1002, name: "เขต 2"},
			  {id: 1003, name: "เขต 3่"}
		  ];
	  }
  };
  
  var webAPI = "http://localhost/DemoWebAPI/api/";
  
  $scope.ddlProvince = 0;
  $scope.ddlDistrict = 0;
  $scope.ddlSubDistrict = 0;
  
  $scope.districtAPI = [];
  $scope.subDistrictAPI = [];
  $http.get(webAPI + "Province").success(function (data) {
	  $scope.provinceAPI = data;
	  $scope.provinceForm = data;
  });
  
  $scope.changeProvinceAPI = function() {
	  $scope.ddlDistrict = 0;
  	  $scope.ddlSubDistrict = 0;
	  $scope.subDistrictAPI = [];
	  $http.get(webAPI + "District/" + $scope.ddlProvince).success(function (data) {
		  $scope.districtAPI = data;
	  });
  };
  
  $scope.changeDistrictAPI = function() {
	  $scope.ddlSubDistrict = 0;
	  $http.get(webAPI + "SubDistrict/" + $scope.ddlDistrict).success(function (data) {
		  $scope.subDistrictAPI = data;
	  });
  };

  $scope.formData = [
  	{
		Name: "Puvanate", 
		Surname: "Pappanont", 
		Email: "puvanate@hotmail.com", 
		Province: 10, 
		District: 1001, 
		SubDistrict : 100101
	}
  ];
  
  $scope.districtForm = [];
  $scope.subDistrictForm = [];
  $scope.changeProvinceForm = function(id) {
	  $scope.subDistrictForm = [];
	  $http.get(webAPI + "District/" +id).success(function (data) {
		  $scope.districtForm = data;
	  });
  };
  
  $scope.changeDistrictForm = function(id) {
	  $http.get(webAPI + "SubDistrict/" + id).success(function (data) {
		  $scope.subDistrictForm = data;
	  });
  };
  
  $scope.start = function() {
  	cfpLoadingBar.start();
  };

  $scope.complete = function () {
  	cfpLoadingBar.complete();
  };
  
});
var demoRouteControllers = angular.module('demoRouteControllers', []);
var webAPI = "http://localhost/DemoWebAPI/api/";
 
demoRouteControllers.controller('registerController', ['$scope', '$location', '$http', '$routeParams', 'toaster',
  function($scope, $location, $http, $routeParams, toaster) {
    $scope.memberId = $routeParams.memberId;
	
	var defaultForm = {
		Id: 0,
  		Name: "",
    	Surname: "",
    	Email: "", 
		ProvinceId: "", 
		DistrictId: "", 
		SubDistrictId: ""
  	};
  
	if ($scope.memberId) {
	  $http.get(webAPI + "Member/" + $scope.memberId).success(function (data) {
		$scope.member = data;
		$scope.changeProvince($scope.member.ProvinceId);
	  	$scope.changeDistrict($scope.member.DistrictId);
	  	$scope.form = angular.copy($scope.member);
	  });
	} else {
	  $scope.form = angular.copy(defaultForm); 
	}
	
	$scope.reset = function() {
	  $scope.memberForm.$setPristine();
	  $scope.districtForm = [];
	  $scope.subDistrictForm = [];
	  $scope.form = angular.copy(defaultForm); 
  	};
	
	$http.get(webAPI + "Province").success(function (data) {
	  $scope.provinceForm = data;
  	});
  
  	$scope.changeProvince = function(id) {
	  try {
		  $scope.districtForm = [];
		  $scope.form.DistrictId = "";
		  $scope.subDistrictForm = [];
		  $scope.form.SubDistrictId = "";
	  } catch (e) { }
	  $http.get(webAPI + "District/" + id).success(function (data) {
		  $scope.districtForm = data;
	  });
  	};
  
  	$scope.changeDistrict = function(id) {
	  try {
		  $scope.subDistrictForm = [];
		  $scope.form.SubDistrictId = "";
	  } catch (e) { }
	  $http.get(webAPI + "SubDistrict/" + id).success(function (data) {
		  $scope.subDistrictForm = data;
	  });
  	};
	
	$scope.save = function() {
	  if ($scope.form.Id != 0) {
		$http.put(webAPI + "Member/" + $scope.form.Id, $scope.form).success(function (data) {
		  toaster.pop("success", "แก้ไขข้อมูลเรียบร้อย");
		  $location.path("/Member");
        }).error(function (data) {
		  toaster.pop("error", "แก้ไขข้อมูลผิดพลาด");
        });
	  } else {
	  	$http.post(webAPI + "Member", $scope.form).success(function (data) {
		  toaster.pop("success", "เพิ่มข้อมูลเรียบร้อย");
		  $location.path("/Member");
        }).error(function (data) {
		  toaster.pop("error", "เพิ่มข้อมูลผิดพลาด");
        });
	  }
  	};
  }]);
  
demoRouteControllers.controller('memberController', ['$scope', '$location', '$http', 'toaster',
  function($scope, $location, $http, toaster) {
  	loadMember();
		
	$scope.edit = function(path) {
	  $location.path(path);
	};
  
	$scope.delete = function(id) {
	  $http.delete(webAPI + "Member/" + id).success(function (data) {
		loadMember();
		toaster.pop("success", "ลบข้อมูลเรียบร้อย");
	  }).error(function (data) {
		toaster.pop("error", "ลบข้อมูลผิดพลาด");
	  });
	};
	
	function loadMember() {
	  $http.get(webAPI + "Member").success(function (data) {
		  $scope.members = data;
	  });
  	}
  }]);
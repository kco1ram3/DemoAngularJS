angular.module("demoApp", ["chieffancypants.loadingBar", "ngAnimate", "toaster"])
.config(function(cfpLoadingBarProvider) {
   cfpLoadingBarProvider.includeSpinner = true;
   cfpLoadingBarProvider.includeBar = true;
})
.controller('demoController', function($scope, $http, toaster) {

  var webAPI = "http://localhost/DemoWebAPI/api/";
  var defaultForm = {
	Id: 0,
  	Name: "",
    Surname: "",
    Email: "", 
	ProvinceId: "", 
	DistrictId: "", 
	SubDistrictId: ""
  };
  
  $scope.form = angular.copy(defaultForm); 
  loadMember();
  
  $scope.reset = function() {
	  $scope.memberForm.$setPristine();
	  $scope.districtForm = [];
	  $scope.subDistrictForm = [];
	  $scope.form = angular.copy(defaultForm); 
  };
  
  $scope.save = function() {
	  if ($scope.form.Id != 0) {
		$http.put(webAPI + "Member/" + $scope.form.Id, $scope.form).success(function (data) {
		  $scope.memberForm.$setPristine();
		  $scope.form = angular.copy(defaultForm); 
		  loadMember();
		  toaster.pop("success", "แก้ไขข้อมูลเรียบร้อย");
        }).error(function (data) {
		  toaster.pop("error", "แก้ไขข้อมูลผิดพลาด");
        });
	  } else {
	  	$http.post(webAPI + "Member", $scope.form).success(function (data) {
		  $scope.memberForm.$setPristine();
		  $scope.form = angular.copy(defaultForm); 
		  loadMember();
		  toaster.pop("success", "เพิ่มข้อมูลเรียบร้อย");
        }).error(function (data) {
		  toaster.pop("error", "เพิ่มข้อมูลผิดพลาด");
        });
	  }
  };
  
  $scope.edit = function(member) {
	  $scope.memberForm.$setPristine();
	  $scope.changeProvince(member.ProvinceId);
	  $scope.changeDistrict(member.DistrictId);
	  $scope.form = angular.copy(member);
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
  
  $http.get(webAPI + "Province").success(function (data) {
	  $scope.provinceForm = data;
  });
  
  $scope.changeProvince = function(id) {
	  $scope.districtForm = [];
	  $scope.form.DistrictId = "";
	  $scope.subDistrictForm = [];
	  $scope.form.SubDistrictId = "";
	  $http.get(webAPI + "District/" +id).success(function (data) {
		  $scope.districtForm = data;
	  });
  };
  
  $scope.changeDistrict = function(id) {
	  $scope.subDistrictForm = [];
	  $scope.form.SubDistrictId = "";
	  $http.get(webAPI + "SubDistrict/" + id).success(function (data) {
		  $scope.subDistrictForm = data;
	  });
  };
  
});
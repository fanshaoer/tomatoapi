var tomatoApp = angular.module('tomatoApp',['angularUtils.directives.dirPagination']);

tomatoApp.factory('user', function() {
  return { email: 'fanshaoer@gmail.com' };
})

tomatoApp.factory('houselist', function() {
  return [{"name":"House1","temputre":"25","humidity":"50","co2":"11"},
                    {"name":"House2","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House3","temputre":"24.9","humidity":"45","co2":"20"},
                    {"name":"House4","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House5","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House6","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House7","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House8","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House9","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House10","temputre":"25.6","humidity":"45","co2":"20"},
                    {"name":"House11","temputre":"25.6","humidity":"45","co2":"20"}]
})

tomatoApp.factory('housedetails', function() {
  // return [{"houseName":"House1","todaysts":[{"group":"group1","hanabusa":"第一花房","sts":"作業1A"},
  //                                            {"group":"group1","hanabusa":"第二花房","sts":"作業1B"},
  //                                            {"group":"group2","hanabusa":"第一花房","sts":"作業2A"},
  //                                            {"group":"group2","hanabusa":"第二花房","sts":"作業2B"}]},
  //         {"houseName":"House2","todaysts":[{"group":"group1","hanabusa":"第一花房","sts":"作業1E"},
  //                                            {"group":"group1","hanabusa":"第二花房","sts":"作業1F"},
  //                                            {"group":"group2","hanabusa":"第一花房","sts":"作業2E"},
  //                                            {"group":"group2","hanabusa":"第二花房","sts":"作業2F"}]}]
  return [{"houseName":"House1","group":"Group1","hanabusa":"第1花房","sts":"作業1A"},
          {"houseName":"House1","group":"Group1","hanabusa":"第2花房","sts":"作業1B"},
          {"houseName":"House1","group":"Group2","hanabusa":"第1花房","sts":"作業2A"},
          {"houseName":"House1","group":"Group2","hanabusa":"第2花房","sts":"作業2B"},
          {"houseName":"House2","group":"Group1","hanabusa":"第1花房","sts":"作業1E"},
          {"houseName":"House2","group":"Group1","hanabusa":"第2花房","sts":"作業1F"},
          {"houseName":"House2","group":"Group2","hanabusa":"第1花房","sts":"作業2E"},
          {"houseName":"House2","group":"Group2","hanabusa":"第2花房","sts":"作業2F"}]
})

tomatoApp.controller('loginController', function($scope,user) {
  $scope.user = user;
});

tomatoApp.controller('houseController', function($scope,user,$location,houselist) {
  // varibles
  $scope.user = user;
  $scope.houselist=houselist;
  
  //　function
  $scope.sort = function(keyname){
      $scope.sortKey = keyname;   //set the sortKey to the param passed
      $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
  $scope.goDetail = function(house){
        console.log("clicked");
        //$location.path($location.host()+'/login.html');
    };
});

tomatoApp.controller('topixController', function($scope,user,$location,houselist) {
  $scope.user = user;
  $scope.houselist=houselist; 
  $scope.navitem="全て";

  $scope.navSelected = function(e){
        var tmp = e.currentTarget.innerText.trim();
        $scope.navitem = tmp;
        console.log($scope.navitem);
    }; 
});

tomatoApp.controller('todaystsController', function($scope,user,$location,houselist,housedetails) {
  $scope.user = user;
  $scope.houselist=houselist; 
  $scope.housedetails=housedetails;  
});

/*tomatoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/top', {
        templateUrl: './top.html',
        controller: 'topController',
        loginRequired: true //
      })
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController'
      })
    .otherwise({redirectTo: '/login'})
}); */
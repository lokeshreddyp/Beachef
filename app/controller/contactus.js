angular.controller("PartyContactController", ['$scope', '$rootScope', '$location', '$http',
function ($scope, $rootScope, $location, $http) {

   $scope.master = {};

        $scope.update = function(user) {
          // $scope.master = angular.copy(user);
          var data = $scope.user;
          console.log(JSON.stringify(data));
          $http({method: 'GET',
                 url: 'http://localhost:8080/docontact',
                 params: data,
                 headers: {
                 'Content-Type': 'application/json'
                 }
             });

             $scope.msg="Thank you for writing to us.";

        };

        // $scope.reset = function() {
        //   $scope.user = angular.copy($scope.master);
        // };
        //
        // $scope.reset();


  }]);

angular.controller("DefaultCtrl", ['$scope', '$http', '$window','$rootScope',
function ($scope, $http, $window, $rootScope) {
//$window.alert("Heyy!");

// $http.get('https://email.us-west-2.amazonaws.com/?Action=SendEmail&Source=abishai.parise%40gmail.com&Destination.ToAddresses.member.1=nihitha.reddy%40gmail.com&Message.Subject.Data=This%20is%20the%20subject%20line.&Message.Body.Text.Data=Hello.%20I%20hope%20you%20are%20having%20a%20good%20day').
//        then(function(response) {
//            $scope.greeting = response.data;
//
// var msg = "hello world";
// $http.post('http://localhost:8080/dowork',msg).success(function(data){
//  //console.log("success ..yay"+data);
// });
//        });

// $http({method: 'GET',
//        url: 'http://localhost:8080/dowork',
//        params: {term: 'abishai'},
//        headers: {
//        'Content-Type': 'application/json' https://partyguard.herokuapp.com/ http://localhost:8080/dowork
//        }
//    });
        $scope.sendMail = function(user){



          var data = $scope.user;
          console.log(JSON.stringify(data));
          $http({method: 'GET',
                 url: 'http://localhost:8080/dowork',
                 params: data,
                 headers: {
                 'Content-Type': 'application/json'
                 }
             });

             $scope.msg="Check your inbox.";

        }

  }]);

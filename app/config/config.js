var angular = angular.module('PartyGuard', [ 'ngRoute',
  'ngCookies',
  'ngFileUpload',
  'ngImgCrop']);
//Page routing
angular.config(function($routeProvider, $locationProvider) {
    $routeProvider
            .when("/AboutUS", {
                templateUrl: "/public/view/Navbar/Aboutus.html",
                controller: "LoginController" })
                .when("/Privacypolicy", {
                    templateUrl: "/public/view/Navbar/Privacypolicy.html",
                    controller: "LoginController" })
                .when("/Termsofservice", {
                    templateUrl: "/public/view/Navbar/Termsofservice.html",
                    controller: "LoginController" })
            .when("/ContactUs", {
                templateUrl: "/public/view/Navbar/ContactUs.html",
                controller: "ContactusController" })
            .when("/PartyContact", {
                    templateUrl: "/public/view/Navbar/partycontact.html",
                    controller: "PartyContactController" })
            .when("/Download", {
                            templateUrl: "/public/view/Navbar/download.html",
                            controller: "DownloadController" })
            .when("/faq", {
                templateUrl: "/public/view/Navbar/faq.html",
                controller: "LoginController" })
            .when("/HowitWorks", {
                templateUrl: "/public/view/Navbar/Howitworks.html",
                controller: "LoginController" })
            .when("/", {
                templateUrl: "/public/view/default/default.html",
                controller: "DefaultCtrl"  })
            .otherwise({
                templateUrl: "/public/view/default/default.html",
                controller: "DefaultCtrl" });

    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});

angular.controller("maincontroller", ['$rootScope',
function ($rootScope) {



    $rootScope.isUserLoggedIn = false;
    $rootScope.loginValue = "Login";
    $rootScope.isMaster = true;
    $rootScope.isHost = true;
    $rootScope.isGuard = true;
    $rootScope.isBasic = true;
//
//     if($rootScope.udetails.UserType == "basic"){
//         $rootScope.isBasic = false;
//     }else if (rootScope.udetails.userType == "host"){
// $rootScope.isHost = host;
//     }else if(rootScope.udetails.userType == "guard"){
//   $rootScope.isGuard = false;
//     }else {
// $rootScope.isMaster = false;
//     }


}]);

angular.controller("DashboardController", ['$scope', '$rootScope', '$location', '$http','$filter',
function ($scope, $rootScope, $location, $http, $filter) {

                // $location.path('/HostProfile');
// if($scope.isUserLoggedIn === true){
//  $scope.loginValue = 'Logout';
//   console.log($scope.loginValue);
//  }

   $rootScope.loginValue = "Logout";
     $rootScope.isMaster = false;
     $rootScope.isHost = true;
     $rootScope.isGuard = true;
     $rootScope.isBasic = true;

 //$scope.isUserLoggedOut
console.log($http.defaults.headers.common.Authorization);
console.log("author "+$rootScope.Author);
var auth = $rootScope.Author;
var uname = $rootScope.uname;
var fullname = $rootScope.udetails.FirstName;
console.log("fullname"+ fullname);
var finalresult = [];
$rootScope.selectedItem = {};

// https://partyguardservices20161025060016.azurewebsites.net/api/FraternityModels
        $scope.IsHidden = true;
        $scope.IsShown = true;
$http({
      method: 'GET',
      url: 'https://partyguardservices20161110094537.azurewebsites.net/FraternityUserList',
      headers: {
      'Authorization': auth
      }}).then(function(result) {
      // console.log(result.data.UserType);

          //var response = { success: type === userType};

           finalresult = result.data;
         console.log("result before "+JSON.stringify(finalresult));
         console.log("size is "+finalresult.length);

            $scope.sort = {
                       sortingOrder : 'id',
                       reverse : false
                   };

           $scope.gap = 5;
           $scope.usercount = finalresult.length;
           $scope.fullname = fullname;
           $scope.filteredItems = [];
           $scope.groupedItems = [];
           $scope.itemsPerPage = 25;
           $scope.pagedItems = [];
           $scope.currentPage = 0;
           $scope.items = finalresult.reverse();
             $scope.members = finalresult;

                  console.log("result fival "+JSON.stringify($scope.items));

          //pending registrations
        $scope.count= 0;
 for (var i = 0; i < $scope.items.length; i++) {

         var a = $scope.items[i].paymentStatus;
         console.log(a)
         if (a == "Suspended"){
           console.log("inside loop");
          $scope.count++;
         }
         console.log($scope.count);

 }

          //end
           var searchMatch = function (haystack, needle) {
                if (!needle) {
                    return true;
                }
                return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
            };

            // init the filtered items
            $scope.search = function () {
              console.log("inside search");
                $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                    for(var attr in item) {
                        if (searchMatch(item[attr], $scope.query))
                            return true;
                    }
                    return false;
                });
                // take care of the sorting order
                if ($scope.sort.sortingOrder !== '') {
                  console.log("inside sort");
                    $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
                }
                $scope.currentPage = 0;
                // now group by pages
               $scope.groupToPages();
            };

            // calculate page in place
           $scope.groupToPages = function () {
               $scope.pagedItems = [];

               for (var i = 0; i < $scope.filteredItems.length; i++) {
                   if (i % $scope.itemsPerPage === 0) {
                       $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
                   } else {
                       $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                   }
               }
           };

           $scope.range = function (size,start, end) {
               var ret = [];
               console.log(size,start, end);

               if (size < end) {
                   end = size;
                   start = size-$scope.gap;
               }
               for (var i = start; i < end; i++) {
                   ret.push(i);
               }
                console.log(ret);
               return ret;
           };

           $scope.prevPage = function () {
               if ($scope.currentPage > 0) {
                   $scope.currentPage--;
               }
           };

           $scope.nextPage = function () {
               if ($scope.currentPage < $scope.pagedItems.length - 1) {
                   $scope.currentPage++;
               }
           };

           $scope.setPage = function () {
               $scope.currentPage = this.n;
           };

           // functions have been describe process the data for display
             $scope.search();

      }, function(error) {
      console.log(error);
      });
//populating table
$scope.ShowHide = function (index) {
    //If DIV is hidden it will be visible and vice versa.
    console.log("index is "+index);
    $scope.IsHidden = $scope.IsHidden ? false : true;
    $scope.IsShown = $scope.IsShown ? false : true;
    $rootScope.selectedItem = $scope.members[index];
    if($rootScope.selectedItem.paymentStatus === "Active"){
      console.log("heyy am active");

    $scope.activeClass = 'btn btn-success disabled';
    $scope.suspendClass = 'btn btn-warning ';
    $scope.activity = false ;
    $scope.buttonClass = 'btn btn-warning';
    $scope.active = "Activated";
    $scope.suspend = "Suspend";

  }else {
      console.log("heyy am suspended");
  //  $scope.suspend = true;
  $scope.activeClass = 'btn btn-success';
  $scope.suspendClass = 'btn btn-warning disabled';
$scope.activity = true ;
  $scope.buttonClass = 'btn btn-success';
    $scope.active = "Activate";
    $scope.suspend = "Suspended"
  }
    console.log($rootScope.selectedItem);

}

$scope.displayTable = function(){
  $scope.IsHidden = true;
  $scope.IsShown = true;

}
$scope.activate = function (){
    $scope.active = "Activate";
  $scope.activeClass = 'btn btn-success ';
  $scope.suspendClass = 'btn btn-warning disabled';
  $scope.suspend = "Suspended";
    $rootScope.selectedItem.paymentStatus = "Suspended";
}
$scope.suspended = function (){
  $scope.activeClass = 'btn btn-success  disabled';
  $scope.active = "Activated";
  $scope.suspendClass = 'btn btn-warning';
  $scope.suspend = "Suspend";
    $rootScope.selectedItem.paymentStatus = "Active";
}

$scope.delete_task = function(index) {
console.log("index is "+index);
var but = $scope.members[index];
console.log("task d is "+JSON.stringify(but));

but.status = 'completed';
but.disabled = true;

};
//populating table

}]);
// angular.$inject = ['$scope', '$filter'];
// angular.directive("customSort", function() {
// return {
//     restrict: 'A',
//     transclude: true,
//     scope: {
//       order: '=',
//       sort: '='
//     },
//     template :
//       ' <a ng-click="sort_by(order)" style="color: #555555;">'+
//       '    <span ng-transclude></span>'+
//       '    <i ng-class="selectedCls(order)"></i>'+
//       '</a>',
//     link: function(scope) {
//
//     // change sorting order
//     scope.sort_by = function(newSortingOrder) {
//         var sort = scope.sort;
//
//         if (sort.sortingOrder == newSortingOrder){
//             sort.reverse = !sort.reverse;
//         }
//
//         sort.sortingOrder = newSortingOrder;
//     };
//
//
//     scope.selectedCls = function(column) {
//         if(column == scope.sort.sortingOrder){
//             return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
//         }
//         else{
//             return'icon-sort'
//         }
//     };
//   }// end link
// }
// });

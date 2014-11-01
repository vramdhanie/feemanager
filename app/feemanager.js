angular.module('FeeApp', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'course.html',
        controller: 'CourseFeeController'
    }).when('/programme', {
        templateUrl: 'programme.html',
        controller: 'ProgrammeFeeController'
    }).when('/group', {
        templateUrl:'group.html',
        controller:'GroupFeeController'
    });
})
.factory('feeData', function($http){
    var courseDetails = [];
    $http.get('fee.json')
                .success(function(data) {
                    courseDetails = data;
                });
    return {
        courseFees: function(){
            return courseDetails.fees;
        },
        programmeFees: function(){
            return courseDetails.programme.fees;
        },
        groups: function(){
            return courseDetails.groups;
        }

    };
})
.controller('CourseFeeController', function($scope, feeData){
    $scope.fees = feeData.courseFees();
})
.controller('ProgrammeFeeController', function($scope, feeData){
    $scope.fees = feeData.programmeFees();

})
.controller('GroupFeeController', function($scope, feeData){
    $scope.groups = feeData.groups();
});

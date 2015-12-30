var crochetControllers = angular.module('crochetControllers', []);

crochetControllers.controller('StitchesListCtrl', ['$scope', '$http',
    function($scope, $http) {
   $http.get('stitches/stitches.json').success(function(data) {
       $scope.stitches = data;
   });

    $scope.orderProp = 'level';
}]);

crochetControllers.controller('StitchDetailCtrl', ['$scope', '$routeParams', '$http',
function($scope, $routeParams, $http) {
    $http.get('stitches/'+ $routeParams.stitchId + '.json').success(function(data){
        $scope.stitch = data
    });
}]);


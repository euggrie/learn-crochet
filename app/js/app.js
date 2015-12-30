'use strict';

var crochetApp = angular.module('crochetApp', [
    'ngRoute',
    'crochetControllers'
]);

crochetApp.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/stitches',{
        templateUrl: 'partials/stitch-list.html',
        controller: 'StitchesListCtrl'
    }).
    when('/stitches/:stitchId', {
        templateUrl: 'partials/stitch-detail.html',
        controller: 'StitchDetailCtrl'
    }).
    otherwise({
        redirectTo: '/stitches'
    });
}]);

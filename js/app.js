var myapp = angular.module("app", ["ui.router", "ui.bootstrap", "ionic"]);
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");
    $stateProvider
        .state("one", {
            url: "/one",
            templateUrl: "one.html",
            controller: oneCtrl
        })
        .state("two", {
            url: "/two",
            templateUrl: "two.html",
            controller: twoCtrl
        })
        .state("three", {
            url: "/three",
            templateUrl: "three.html",
            controller: threeCtrl
        })
        .state("four", {
            url: "/four",
            templateUrl: "four.html",
            controller: fourCtrl
        })
        .state("five", {
            url: "/five",
            templateUrl: "five.html",
            controller: fiveCtrl
        })
        .state("six", {
            url: "/six",
            templateUrl: "six.html",
            controller: sixCtrl
        })
});

function oneCtrl($scope) {
    $scope.myActiveSlide = 1;
}
function twoCtrl($scope) {

}
function threeCtrl($scope) {

}
function fourCtrl($scope) {

}
function fiveCtrl($scope) {

}
function sixCtrl($scope) {

}

myapp.controller("showCtrl", function($scope) {

});

myapp.controller("eventCtrl", function($scope) {

});
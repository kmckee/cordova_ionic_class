angular.module('starter')
.controller('CalculatorController', function($scope) {
    console.log('foo');
    $scope.display = "";
    $scope.clear = function () {
        $scope.display = "";
    };
    $scope.equals = function () {
        $scope.display = "100";
    };
    $scope.appendToDisplay = function (character) {
        $scope.display = $scope.display + character;
    };
});

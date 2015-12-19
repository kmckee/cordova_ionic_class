angular.module('starter')
.controller('CalculatorController', function($scope) {
    $scope.display = "";
    $scope.clear = function () {
        $scope.display = "";
    };
    $scope.equals = function () {
        var equation = $scope.display;
        var parser = new Epsilon.ExpressionParser(equation);
        var result = parser.evaluate();
        $scope.display = result;
        navigator.vibrate(500);
    };
    $scope.appendToDisplay = function (character) {
        $scope.display = $scope.display + character;
    };
});

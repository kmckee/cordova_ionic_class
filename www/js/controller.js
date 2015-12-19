angular.module('starter')
.controller('CalculatorController', function($scope) {
    console.log('foo');
    $scope.display = "";
    $scope.clear = function () {
        $scope.display = "";
    };
    $scope.equals = function () {
        var equation = $scope.display;
        var parser = new Epsilon.ExpressionParser(equation);
        var result = parser.evaluate();
        $scope.display = result;
    };
    $scope.appendToDisplay = function (character) {
        $scope.display = $scope.display + character;
    };
});

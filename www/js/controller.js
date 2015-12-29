angular.module('starter')
.controller('CalculatorController', function($scope, equationRepository) {
    $scope.display = "";
    $scope.clear = function () {
        $scope.display = "";
    };
    $scope.equals = function () {
        var equation = $scope.display;
        // Note how save returns a Promise!
        equationRepository.save(equation).then(function() {
            var parser = new Epsilon.ExpressionParser(equation);
            var result = parser.evaluate();
            $scope.display = result;
            navigator.vibrate(500);
        }).catch(function(err) {
            console.log('error!', err);
        });
    };
    $scope.appendToDisplay = function (character) {
        $scope.display = $scope.display + character;
    };
});

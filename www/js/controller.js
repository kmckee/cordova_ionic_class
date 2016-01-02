angular.module('starter')
.controller('CalculatorController', function($scope, equationRepository, $ionicModal) {
    $scope.display = "";
    $scope.equations = [
        { equation: "5*5", author: "Kyle" },
        { equation: "2*3", author: "Nate" }
    ];

    $ionicModal.fromTemplateUrl('equation-history.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    $scope.openEquationHistory = function () {
        equationRepository.all().then(function(allEquations) {
            $scope.equations = allEquations; 
            $scope.modal.show(); 
        });
    };
    $scope.closeEquationHistory = function() {
        $scope.modal.hide();
    }
    $scope.selectEquation = function(equation) {
        $scope.display = equation;
        $scope.closeEquationHistory();
    }

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

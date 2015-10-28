var app = angular.module('Angular2',[])

app.controller('MainController', function($scope){
    
    
    $scope.firstNum = '';
        $scope.secondNum = '';
    $scope.res = '';
    $scope.sum = function(){
       
        $scope.res = parseInt($scope.firstNum) + parseInt($scope.secondNum);
        
    }           
})

app.controller('SecondController', function($scope){
    $scope.thirdNum = '';
    $scope.otherNum = '';
    $scope.mul = '';
    $scope.result = function(){
    
        $scope.mul = parseInt($scope.thirdNum) * parseInt($scope.otherNum);
    }


})

var app = angular.module('learningAngular',[])

app.controller('MainController', function($scope){

    $scope.people = [
        {
        name: 'Bob',
        age: 30,
        kids: [{
            name: 'Bobby Jr',
            age: 3,
            favoritetoys: 'Security Blanket'
        
        },]    
        },
        
        {
        name: 'Charles',
        age: 27, 
        kids: [{
            name: 'Charles Jr',
            age: 4,
            favoritetoys: ' Blanket'
        
        },]    
        },
        
        {
        name: 'sariah',
        age: 26,
        },
    
    ]
});
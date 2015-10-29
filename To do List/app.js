var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    $scope.todoList = [];
    $scope.newToDo = {
        title: null,
        description: null,
        price: null,
        completed: false,
        image: null
    };

    $http.get("http://mean.codingcamp.us/todo/otoniel").then(function (response) {
        $scope.todoList = response.data;

    });
    $scope.submit = function (newToDo) {

        $http.post('http://mean.codingcamp.us/todo/otoniel', newToDo).then(function (response) {

            $scope.todoList.push(response.data)
            alert('It worked!');
        }, function (response) {
            alert('It did not work!');
        });

    }

    $scope.deleteItem = function (newToDo) {

        $http.delete('http://mean.codingcamp.us/todo/otoniel' + newToDo._id).then(function (response) {

            alert('It was deleted');
        }, function (response) {
            alert("There was a problem deleting your todo :(");
        });
    };
}]);
var app = angular.module("Services")

app.service("CartoonService", function () {

    this.listOfCartoons = [];



    this.addCartoon = function (name, url, desc) {

        var cartoon = {
            name: name,
            url: url,
            desc: desc
        };
        this.listOfCartoons.push(cartoon);
    }
});
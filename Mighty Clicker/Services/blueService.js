var app = angular.module("Mighty")

app.service("blueService", function () {

    this.blue = 100;

    this.blueServiceUp = function () {
        this.blue = this.blue + 1;
    }

    this.blueServiceDown = function () {
        this.blue = this.blue- 1;
    }

    this.resetBlue = function () {
        if (this.blue === 0) {
            this.blue = 100;
        }
    }
});
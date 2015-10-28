var app = angular.module("Mighty")

app.service("redService", function () {

    this.red = 100;

    this.redServiceUp = function () {
        this.red = this.red + 1;
    }

    this.redServiceDown = function () {
        this.red= this.red - 1;
    }
    this.resetRed = function () {
        if (this.red === 0) {
            this.red = 100;
        }
    }
});
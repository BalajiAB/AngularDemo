(function () {
    var app = angular.module("myapp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.
        when("/", {
            controller: "RegisterController",
            templateUrl: "app/views/register.html"
        })
        .when("/signin", {
            controller: "LoginController",
            templateUrl: "app/views/login.html"
        })
        .when("/Forgot", {
            controller: "ForgotController",
            templateUrl: "app/views/forgotpassword.html"
        }) 
        .when("/Login", {
            templateUrl:"app/views/HomePage.html"
        })
        .otherwise({ redirectTo: '/' });
    })
}());
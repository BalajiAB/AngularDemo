(function () {

    var loginController = function ($scope,$location, RegisterService) {
        var user;
        $scope.LoginUser=function()
        {
            user = {
                username: $scope.username,
                upassword: $scope.upassword
            };
            var resp = RegisterService.validateUser(user);
            resp.success(function (data) {
                alert(data);
                alert("Helo");
                $location.path('/Login');
            });
            resp.error(function () {
                alert("Login Details Incorrect");
            });
        }

    };
    angular.module("myapp").controller("LoginController", loginController);
}())
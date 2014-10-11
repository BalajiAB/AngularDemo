(function () {

    var registerController = function ($scope, $location, RegisterService)
    {
        var user;
        $scope.RegisterUser = function () {
             user = {
                name: $scope.name,
                password: $scope.password,
                email: $scope.email
             };

             var resp = RegisterService.addUser(user);
             resp.success(function (data) {
                 alert(data);
                 alert("Helo");
                 $location.path('/signin');
             });
             resp.error(function () {
                 alert("Problem in Registration");
             });
        };
        
    }
    angular.module("myapp").controller('RegisterController', registerController);
}());
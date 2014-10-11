(function () {

    var registerService = function ($http) {

        this.addUser=function(user)
        {
           return $http.post('Home/registeruser',user);
        }
        this.validateUser=function(user)
        {
            return $http.post('Home/ValidateUser', user);
        }
        this.GetPassword=function(id)
        {
            return $http.post('Home/GetPassword/' + id);
        }
    }

    angular.module("myapp").service('RegisterService', registerService);
}());
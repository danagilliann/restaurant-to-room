(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('RestaurantsController', RestaurantsController);
    
    RestaurantsController.$inject = ['$http'];
    
    function RestaurantsController($http) {
        var vm = this;
        
        $http.get('/orders/api/restaurants')
            .then(function(response) {
                
            },
            function(reason) {
                console.log(reason);
            })
            .catch(function(err) {
                console.log(err);
            })
    }      
    
}());
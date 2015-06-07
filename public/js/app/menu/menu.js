(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('MenuController', MenuController);
        
    MenuController.$inject = ['api', '$routeParams', 'ngDialog'];
    
    function MenuController(api, $routeParams, ngDialog) {
        var vm = this;
        
        api.getRestaurantDetails($routeParams.restId)
            .then(function(data) {
                vm.restaurant = data;
            });
    }
}());
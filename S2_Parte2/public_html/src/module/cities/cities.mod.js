

(function (ng) {
    var mod = ng.module("citiesModule", ['ui.router']);
    mod.config(['$stateProvider', function ($stateProvider) {
            var basePath = 'src/module/cities/';
            $stateProvider.state('citiesList', {
                url: '/cities',
                views: {
                    'mainView': {
                        templateUrl: basePath + 'cities.list.html',
                        controller: 'citiesCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }]
        );
})(window.angular);

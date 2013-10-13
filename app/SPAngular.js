(function(global, ng) {

    'use strict';

    /**
     * Contains common application-level controls such as modal window, custom select boxes etc.
     * @namespace SPAngular.Controls
     */
    ng.module('SPAngular.Controls', []);

    /**
     * Contains services for working with data.
     * @namespace SPAngular.Data
     */
    ng.module('SPAngular.Data', []);

    /**
     * Contains utility filters or directives.
     * @namespace SPAngular.Utils
     */
    ng.module('SPAngular.Utils', []);

    /**
     * The main module of the SPAngular application. 
     * Defines all configuration options and routing settings.
     *
     * @name SPAngular
     * @namespace SPAngular
     */
    ng.module('SPAngular', ['ui.router', 'SPAngular.Controls', 'SPAngular.Data', 'SPAngular.Utils']).config([
        '$urlRouterProvider',
        '$stateProvider',
        function($urlRouterProvider, $stateProvider) {
            // by default redirect user to the root route
            // if route is undefined in the application - redirect user to the error page
            $urlRouterProvider
                .when('', '/home')
                .when('/', '/home')
                .otherwise('/error');

            // define application routes
            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        '' : {
                            templateUrl: 'app/parts/_home.html'
                        }
                    }
                })
                .state('error', {
                    url: '/error',
                    views: {
                        '': {
                            templateUrl: 'app/parts/_error.html'
                        }
                    }
                });
        }
    ]).run([
        '$rootScope',
        '$state',
        '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            var loading = global.document.getElementById('pageLoading'),
                opacity = 1,
                fadeOut = function () {
                    setTimeout(function () {
                        opacity -= 0.1;
                        loading.style.opacity = opacity;

                        if (opacity > 0) {
                            fadeOut();
                        } else {
                            loading.parentNode.removeChild(loading);
                            loading = null;
                        }
                    }, 50);
                };

            // hide and remove the loading element once the page is completely loaded
            fadeOut();
        }
    ]);

}(this, angular));
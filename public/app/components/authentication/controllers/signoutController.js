/**
 * @desc Controllers of EasilyLocation
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('appEasilyLocation')
        .controller('SignoutController', LoginController);

    LoginController.$inject = ['$rootScope', '$scope', '$state', 'authenticateWebApi'];

    /**
     * @desc Controllers of ProvisionalPlans
     * @namespace LoginController
     * @memberOf Controllers
     */
    function LoginController($rootScope, $scope, $state, authenticateWebApi) {
        (function init() {
            defineScope();
            defineListeners();
        })();


        /**
         * @desc Defines all $scope variables
         * @function defineScope
         * @memberOf Controllers.LoginController
         */
        function defineScope() {
            $scope.loginForm = {
                email: '',
                password: ''
            };
        }


        /**
         * @desc Attach view listeners to this controller
         * @function defineListeners
         * @memberOf Controllers.LoginController
         */
        function defineListeners() {
            $scope.logout = _logout;
        }


        /**
         * @desc Get the information of form and call webservice to try sign user
         * @function _signin
         * @memberOf Controllers.LoginController
         */
        function _logout() {
            authenticateWebApi.logout().then(function () {
                $rootScope.user = null;
                $state.go('home');
            });
        }
    }
})();
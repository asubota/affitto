(function() {
  'use strict';

  angular
    .module('app.core')
    .config(Configure);

  ////////////////////////////////////////

  /* @ngInject */
  function Configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('aff', {
        url: '/',
        templateUrl: 'app/layout/shell.html',
        controller: 'Shell as vm'
      });
  }

})();

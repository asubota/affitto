(function() {
  'use strict';

  angular
    .module('app.form')
    .config(Configure);

  /* @ngInject */
  function Configure($stateProvider) {
    $stateProvider
      .state('aff.form', {
        url:'form',
        views: {
          content: {
            templateUrl: 'app/form/form.html',
            controller: 'Form as vm'
          }
        }
      });
  }

})();

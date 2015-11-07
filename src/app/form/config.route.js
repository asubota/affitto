(function() {
  'use strict';

  angular
    .module('app.form')
    .config(Configure);

  /* @ngInject */
  function Configure($stateProvider) {
    $stateProvider
      .state('aff.add', {
        url:'form',
        views: {
          content: {
            templateUrl: 'app/form/form.html',
            controller: 'FormAdd as vm'
          }
        },
        resolve: {
          last: ['dataService', function(dataService) {
            return dataService.getLast();
          }]
        }
      })
      .state('aff.edit', {
        url:'form/:id',
        views: {
          content: {
            templateUrl: 'app/form/form.html',
            controller: 'FormEdit as vm'
          }
        },
        resolve: {
          item: ['dataService', '$stateParams', function(dataService, $stateParams) {
            return dataService.getRecord($stateParams.id);
          }]
        }
      });
  }

})();

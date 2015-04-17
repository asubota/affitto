(function() {
  'use strict';

  angular
    .module('app.table')
    .config(Configure);

  /* @ngInject */
  function Configure($stateProvider) {
    $stateProvider
      .state('aff.table', {
        url:'table',
        views: {
          content: {
            templateUrl: 'app/table/table.html',
            controller: 'Table as vm'
          }
        },
        resolve: {
          data: ['dataService', function(dataService) {
            return dataService.get();
          }]
        }
      });
  }

})();

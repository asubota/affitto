(function() {
  'use strict';

  angular
    .module('app.graph')
    .config(Configure);

  /* @ngInject */
  function Configure($stateProvider) {
    $stateProvider
      .state('aff.graph', {
        url:'graph',
        views: {
          content: {
            templateUrl: 'app/graph/graph.html',
            controller: 'Graph as vm'
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

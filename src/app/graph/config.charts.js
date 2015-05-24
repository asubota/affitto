(function() {
  'use strict';

  angular
    .module('app.graph')
    .config(Configure);

  ////////////////////////////////////////

  /* @ngInject */
  function Configure(ChartJsProvider) {
    ChartJsProvider.setOptions({
      colours: ['#F7464A', '#97BBCD', '#FDB45C', '#46BFBD', '#DCDCDC', '#949FB1', '#4D5360']
    });

    // ChartJsProvider.setOptions('Pie', {
    //   colours: ['#F7464A','#97BBCD', '#FDB45C', '#46BFBD', '#DCDCDC', '#949FB1', '#4D5360']
    // });
  }

})();

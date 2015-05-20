(function () {
  'use strict';

  angular
    .module('app.graph')
    .controller('Graph', Graph);

  /* @ngInject */
  function Graph(data, calcService, PRECISION) {
    var vm = this;

    vm.data   = getGraphData(data);
    vm.series = getSeries(data);
    vm.labels = getLabels(data);

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function getData(type) {
      var result = [];

      if (type === 'total') {
        return data.map(function(item) {
          return calcService.calculateTotal(item.values);
        });
      }

      return _.chain(data)
        .pluck('values')
        .map(function(values) {
          return _.filter(values, {type: type})[0];
        })
        .map(function(item) {
          return (item.amount * item.price).toFixed(PRECISION);
        })
        .value();
     }

    function getGraphData() {
      return [
        getData('total'),
        getData('coldWater'),
        getData('hotWater'),
        getData('electricity')
      ];
    }

    function getLabels() {
      return data.map(function(item) {
        return [item.month, item.year].join(',');
      });
    }

    function getSeries() {
      return ['Total', 'Cold Water', 'Hot Water', 'Electricity'];
    }

  }

})();

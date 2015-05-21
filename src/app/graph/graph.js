(function () {
  'use strict';

  angular
    .module('app.graph')
    .controller('Graph', Graph);

  /* @ngInject */
  function Graph(data, calcService, PRECISION) {
    var vm = this;

    vm.type   = 'line';
    vm.toggle = toggle;

    vm.lineData   = getLineData(data);
    vm.lineSeries = getSeries(data);
    vm.lineLabels = getLabels(data);

    vm.pieData    = getPieData(data);
    vm.pieLabels  = ['Cold Water', 'Hot Water', 'Electricity'];

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function toggle() {
      vm.type = vm.type === 'line' ? 'pie' : 'line';
    }

    function getData(type) {
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

    function getLineData() {
      return [
        getData('total'),
        getData('coldWater'),
        getData('hotWater'),
        getData('electricity')
      ];
    }

    function getPieData() {
      var calc = function(sum, val) { return sum + parseFloat(val); };
      return [
        getData('electricity').reduce(calc, 0).toFixed(PRECISION),
        getData('coldWater').reduce(calc, 0).toFixed(PRECISION),
        getData('hotWater').reduce(calc, 0).toFixed(PRECISION),
      ];
    }

    function getLabels() {
      return data.map(function(item) {
        return [item.month, item.year].join(', ');
      });
    }

    function getSeries() {
      return ['Total', 'Cold Water', 'Hot Water', 'Electricity'];
    }

  }

})();

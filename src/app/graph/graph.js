(function () {
  'use strict';

  angular
    .module('app.graph')
    .controller('Graph', Graph);

  /* @ngInject */
  function Graph(data, calcService, PRECISION, _) {
    var vm = this;

    vm.type   = 'line';
    vm.toggle = toggle;
    vm.toggleTotal = toggleTotal;

    vm.lineData   = getLineData(data);
    vm.lineSeries = getSeries(data);
    vm.lineLabels = getLabels(data);

    vm.pieData    = getPieData(data);
    vm.pieLabels  = ['Hot Water', 'Cold Water', 'Electricity'];

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function toggleTotal() {
      if (vm.lineData.length === 4) {
        vm.totalData = vm.lineData.pop();
      } else {
        vm.lineData.push(vm.totalData);
      }
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
        getData('hotWater'),
        getData('coldWater'),
        getData('electricity'),
        getData('total'),
      ];
    }

    function getPieData() {
      var calc = function(sum, val) { return sum + parseFloat(val); };
      return [
        getData('hotWater').reduce(calc, 0).toFixed(PRECISION),
        getData('coldWater').reduce(calc, 0).toFixed(PRECISION),
        getData('electricity').reduce(calc, 0).toFixed(PRECISION)
      ];
    }

    function getLabels() {
      return data.map(function(item) {
        return [item.month, item.year].join(', ');
      });
    }

    function getSeries() {
      return ['Hot Water', 'Cold Water', 'Electricity', 'Total'];
    }

  }

})();

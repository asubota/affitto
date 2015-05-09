(function () {
  'use strict';

  angular
    .module('app.graph')
    .controller('Graph', Graph);

  /* @ngInject */
  function Graph(data) {
    var vm = this;

    vm.data            = data;
    vm.xAxisTickFormat = xAxisTickFormat;
    vm.getColor        = getColor;
    vm.graphData       = []

    activate();

    ////////////////////////////////////////

    function activate() {
      vm.graphData = [{
        key: 'Hot water',
        area: false,
        values: getData('hotWater')
      }, {
        key: 'Cold water',
        area: false,
        values: getData('coldWater')
      }, {
        key: 'Electricity',
        area: false,
        values: getData('electricity')
      }];
    }

    function getData(type) {
      var result = [];
      var id = 1;

      vm.data.forEach(function(item) {
        var dataItem = item.values.filter(function(item) {
          return item.type === type;
        })[0], value = (dataItem.price*dataItem.amount).toFixed(4);

        result.push([id++, value]);
      });

      return result;
    }

    function xAxisTickFormat() {
      return function(index) {
        return vm.data[index-1].month;
      };
    }

    function getColor() {
      return function(data, index) {
        switch (index) {
          case 0: return 'red';
          case 1: return 'green';
          case 2: return '#EDA509';
        }
      };
    }
  }

})();

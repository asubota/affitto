(function () {
  'use strict';

  angular
    .module('app.graph')
    .controller('Graph', Graph);

  /* @ngInject */
  function Graph(data) {
    var vm = this;

    vm.data = data;

    activate();

    var getData = function(type) {
      var result = [];

      vm.data.forEach(function(item) {
        var dataItem = item.values.filter(function(item) {
          return item.type === type;
        })[0], value = (dataItem.price*dataItem.amount).toFixed(4);

        result.push([item.id, value]);
      });

      return result;
    };

    vm.xAxisTickFormatFunction = function() {
      return function(index) {
        return vm.data[index-1].month;
      };
    };

    vm.exampleData = [{
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

    vm.colorFunction = function() {
      return function(data, index) {
        switch (index) {
          case 0: return 'red';
          case 1: return 'green';
          case 2: return 'yellow';
        }
      };
    };

    ////////////////////////////////////////

    function activate() {

    }
  }

})();

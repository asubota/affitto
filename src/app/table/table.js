(function () {
  'use strict';

  angular
    .module('app.table')
    .controller('Table', Table);

  /* @ngInject */
  function Table(data) {
    var vm = this;

    vm.data = data;

    activate();

    ////////////////////////////////////////

    function activate() {
      vm.data.forEach(function(item) {
        item.total = calculateTotal(item.values || []);
      });

      function calculateTotal(data) {
        return data.reduce(function(value, item) {
          return value + item.amount * item.price;
        }, 0);
      }

    }
  }

})();

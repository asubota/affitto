(function () {
  'use strict';

  angular
    .module('app.table')
    .controller('Table', Table);

  /* @ngInject */
  function Table(data, calcService) {
    var vm = this;

    vm.data = data;

    activate();

    ////////////////////////////////////////

    function activate() {
      vm.data.forEach(function(item) {
        item.total = calcService.calculateTotal(item.values);
      });
    }
  }

})();

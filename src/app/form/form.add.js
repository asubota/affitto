(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('FormAdd', FormAdd);

  /* @ngInject */
  function FormAdd($state, dataService, formService) {
    var vm = this;

    vm.save = save;
    vm.item = {year: 2015};

    vm.item.values = [
      {type: 'electricity', price: 0.3222},
      {type: 'coldWater', price: 7.46},
      {type: 'hotWater', price: 28.67}
    ];

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function save() {
      if (vm.item.year && vm.item.month) {
        dataService.add(vm.item).then(success, fail);
      }

      function success() {
        $state.go('aff.table');
      }

      function fail() {

      }
    }
  }

})();

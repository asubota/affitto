(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('FormAdd', FormAdd);

  /* @ngInject */
  function FormAdd($state, dataService, formService) {
    var vm = this;
    var currentDate = new Date();

    vm.save = save;
    vm.years  = formService.getYears();
    vm.months = formService.getMonths();

    vm.item = {
      year: currentDate.getFullYear(),
      month: vm.months[currentDate.getMonth()]
    };

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

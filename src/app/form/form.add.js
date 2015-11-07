(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('FormAdd', FormAdd);

  /* @ngInject */
  function FormAdd($state, dataService, formService, last) {
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
      {type: 'electricity', price: last.electricity},
      {type: 'coldWater', price: last.coldWater},
      {type: 'hotWater', price: last.hotWater}
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

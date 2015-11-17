(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('FormEdit', FormEdit);

  /* @ngInject */
  function FormEdit($state, dataService, item, formService) {
    var vm = this;

    vm.save = save;
    vm.getTotal = getTotal;
    vm.years  = formService.getYears();
    vm.months = formService.getMonths();

    vm.item = item;

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function getTotal() {
      return formService.getTotal(vm.item.values);
    }

    function save() {
      if (vm.item.year && vm.item.month) {
        dataService.save(vm.item).then(success, fail);
      }

      function success() {
        $state.go('aff.table');
      }

      function fail() {

      }
    }
  }

})();

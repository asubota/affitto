(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('FormEdit', FormEdit);

  /* @ngInject */
  function FormEdit($state, dataService, item) {
    var vm = this;

    vm.save = save;
    vm.item = item;

    activate();

    ////////////////////////////////////////

    function activate() {

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

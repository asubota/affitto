(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('FormAdd', FormAdd);

  /* @ngInject */
  function FormAdd($state, dataService) {
    var vm = this;

    vm.save = save;
    vm.item = {};

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function save() {
      dataService.add(vm.item).then(success, fail);

      function success() {
        $state.go('aff.table');
      }

      function fail() {

      }
    }
  }

})();

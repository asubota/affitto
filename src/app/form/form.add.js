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

    vm.item.values = [
      {type: 'electricity'},
      {type: 'coldWater'},
      {type: 'hotWater'}
    ];

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

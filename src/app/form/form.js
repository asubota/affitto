(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('Form', Form);

  /* @ngInject */
  function Form($state, dataService) {
    var vm = this;

    vm.save = save;

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function save() {
      var action = true ? 'add' : 'save';
      var data = {
        year: vm.year,
        month: vm.month
      };

      dataService[action](data).then(success, fail);

      function success() {
        $state.go('aff.table');
      }

      function fail() {

      }
    }
  }

})();

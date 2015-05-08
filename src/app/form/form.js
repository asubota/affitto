(function () {
  'use strict';

  angular
    .module('app.form')
    .controller('Form', Form);

  /* @ngInject */
  function Form($state) {
    var vm = this;

    vm.save = save;

    activate();

    ////////////////////////////////////////

    function activate() {

    }

    function save() {
      $state.go('aff.table')
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('app.table')
    .controller('Table', Table);

  /* @ngInject */
  function Table(data) {
    var vm = this;

    vm.data = data;

    activate();

    ////////////////////////////////////////

    function activate() {

    }
  }

})();

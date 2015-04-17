(function () {
  'use strict';

  angular
    .module('app.graph')
    .controller('Graph', Graph);

  /* @ngInject */
  function Graph(data) {
    var vm = this;

    vm.data = data;

    activate();

    ////////////////////////////////////////

    function activate() {

    }
  }

})();

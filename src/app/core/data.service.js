(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', Data);

  /* @ngInject */
  function Data() {
    var factory = {
      get: get
    };

    return factory;

    ////////////////////////////////////////

    function get() {
      var data = [];

      return data;
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('calcService', CalcService);

  /* @ngInject */
  function CalcService(PRECISION) {
    var factory = {
      calculateTotal: calculateTotal,
    };

    return factory;

    ////////////////////////////////////////

    function calculateTotal(data) {
      return data.reduce(function(value, item) {
        return value + item.amount * item.price;
      }, 0).toFixed(PRECISION);
    }

  }

})();

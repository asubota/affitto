(function() {
  'use strict';

  angular
    .module('app.form')
    .factory('formService', FormService);

  /* @ngInject */
  function FormService() {
    var factory = {
      getYears: getYears,
      getMonths: getMonths,
      getTotal: getTotal
    };

    return factory;

    ////////////////////////////////////////

    function getYears() {
      return [2014, 2015, 2016, 2017];
    }

    function getMonths() {
      return  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    function getTotal(data) {
      return data.reduce(function(sum, item) {
        return sum + parseFloat(item.price, 10) * parseFloat(item.amount, 10);
      }, 0).toFixed(2);
    }

  }

})();

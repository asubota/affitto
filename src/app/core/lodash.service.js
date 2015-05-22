(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('_', Lodash);

  /* @ngInject */
  function Lodash($window) {
    var factory = $window._;

    if (!factory) {
      throw new Error('Error! No lodash!');
    }

    return factory;
  }

})();

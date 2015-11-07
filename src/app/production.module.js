(function() {
  'use strict';

  angular.module('production', [])
    .config(Configure);

  ////////////////////////////////////////

  /* @ngInject */
  function Configure($compileProvider, $logProvider, $provide, $animateProvider) {
    $provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
    $compileProvider.debugInfoEnabled(false);
    $logProvider.debugEnabled(false);
    $animateProvider.classNameFilter(/animated/);
  }

  /* @ngInject */
  function exceptionHandlerDecorator($delegate, $log) {
    $delegate = function(excpetion, couse) {
      // $log.log();
    };

    return $delegate;
  }
})();

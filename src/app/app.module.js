(function() {
  'use strict';

  angular.module('app', [
    'production',
    'app.core',
    'app.widgets',
    'app.layout',

    'app.graph',
    'app.table',
    'app.form'
  ]);

})();
